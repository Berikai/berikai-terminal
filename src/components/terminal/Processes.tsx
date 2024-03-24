import TerminalWindow from "../TerminalWindow"
import Terminal from "./Terminal"
import { scroll } from "../Window"
import GenerateID from "../scripts/GenerateID"

// If it is zero (0), it's the main terminal window. Main terminal windows cannot be closed without - key press.
// Also, if the first terminal window's id is 0, it cannot be closed with - key press too.
// It's a feature, not a bug. :)
const init_terminal_id = GenerateID()
const terminal = new Terminal(init_terminal_id, true)

export let Processes: any = [[init_terminal_id, <TerminalWindow key={init_terminal_id} terminal={terminal} />]]

let state = null

export function setState (_state) {
    state = _state
}

export function getState (arg) {
    state(arg)
}

export function addProcess(id, process) {
    Processes.push([id, process])
    getState([...Processes])
}

export function killProcess(id) {
    Processes.forEach(([_id, _process], _index) => {
        if (_id == id) Processes.splice(_index, 1)
    })

    if(document.body.style.overflow != "") {
        document.body.style.overflow = ""
        window.scrollTo(0, scroll)
    }

    getState([...Processes])
}