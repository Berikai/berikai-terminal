import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Shows the process ID of the current terminal window",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text={terminal.id} />)
    }
})