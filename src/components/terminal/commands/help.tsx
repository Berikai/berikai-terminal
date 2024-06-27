import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "List available commands",
    hidden: true,
    execute: (args) => {
        if (args[0] == "--all" || args[0] == "-A" || args[0] == "-a" ) {
            for (const command in terminal.commands) {
                terminal.console.push(<TerminalText text={`- ${command}: ${terminal.commands[command].description}`} />)
            }
        } else {
            for (const command in terminal.commands) {
                if (!terminal.commands[command].hidden) {
                    terminal.console.push(<TerminalText text={`- ${command}: ${terminal.commands[command].description}`} />)
                }
            }
            terminal.console.push(<TerminalText text={`Type 'help --all' for all available commands.`} />)
        }
    }
})