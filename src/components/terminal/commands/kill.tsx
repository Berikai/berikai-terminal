import { killProcess } from "../Processes"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Kill the process with the given ID",
    hidden: true,
    execute: (args) => {
        if (args[0] === "" || args[0] === undefined) {
            terminal.console.push(<TerminalText text="Please provide a process ID." />)
            return
        }

        if(args[0] == 0) {
            terminal.console.push(<TerminalText text="Cannot kill main terminal window." />)
            return
        }

        killProcess(args[0])
    }
})