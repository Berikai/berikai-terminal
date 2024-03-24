import { Processes, killProcess } from "../Processes"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Kill all processes",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text="Killing all processes..." />)
        
        const process_ref = Processes.slice(0)
        for (const [id, _] of process_ref) {
            if (id != 0) {
                killProcess(id)
            } else {
                terminal.console.push(<TerminalText text="Cannot kill main terminal window." />)
            }
        }
    }
})