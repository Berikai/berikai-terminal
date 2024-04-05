import { JSX } from "preact"
import { TerminalText } from "./TerminalTexts"
import Commands from "./Commands"
import { addProcess, killProcess } from "./Processes"
import TerminalWindow from "../TerminalWindow"
import GenerateID from "../scripts/GenerateID"

export default function Terminal(id: any, init = false) {
    this.console = init ? [<TerminalText text="Type 'help' to get started." />] : []
    this.history = [""]
    this.history.cursor = 0
    this.commands = Commands(this)
    this.id = id
    this.continue = false
    this.setContinue = () => {}
    this.setContinueState = (value) => this.setContinue = value
}

Terminal.prototype.newProcess = function(id: string, window: JSX.Element) {
    addProcess(id, window)
}

Terminal.prototype.new = function() {
    this.console.push(<TerminalText text="Opening new terminal window..." />)
    const new_id = GenerateID()
    this.newProcess(new_id, <TerminalWindow key={new_id} terminal={new Terminal(new_id)} />)
}

Terminal.prototype.exit = function() {
    if (this.id == 0) {
        this.console.push(<TerminalText text="Cannot exit main terminal window." />)
        return
    }

    this.console.push(<TerminalText text="Exiting terminal..." />)
    this.console.push(this.id)
    killProcess(this.id)
}

Terminal.prototype.getConsole = function() {
    return this.console
}

Terminal.prototype.log = function(message: JSX.Element) {
    this.console.push(message)
}

Terminal.prototype.clear = function() {
    this.console = []
}

Terminal.prototype.execute = function(command: string) {
    if (command == "") return
    this.history.push(command)
    this.history.cursor = this.history.length
    const [cmd, ...args] = command.split(" ")
    if (this.commands[cmd]) {
        this.commands[cmd].execute(args)
    } else {
        this.console.push(<TerminalText text={`Command not found: ${cmd}`} />)
    }
}

