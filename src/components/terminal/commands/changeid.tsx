import { Processes } from "../Processes"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Change the process ID of the current terminal window (0 = main terminal)",
    hidden: true,
    execute: (args) => {
        if (args[0] === "" || args[0] === undefined) {
            terminal.console.push(<TerminalText text="Please provide a new ID." />)
            return
        }

        Processes.forEach(([id, _process]) => {
            if (id === args[0]) {
                terminal.console.push(<TerminalText text="ID already exists." />)
                return
            }
        })

        Processes.forEach(([id, _process], index) => {
            if (id === terminal.id) {
                Processes[index][0] = args[0]
            }
        })

        terminal.id = args[0]
        terminal.console.push(<TerminalText text="ID changed." />)
    }
})