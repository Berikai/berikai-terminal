import { Processes } from "../Processes"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "List all open processes",
    hidden: true,
    execute: () => {
        Processes.forEach(([id, _process], index) => {
            terminal.console.push(<TerminalText text={(index + 1) + ". " + id} />)
        })
    }
})