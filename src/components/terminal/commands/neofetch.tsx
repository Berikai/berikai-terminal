import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Show system information",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text="OS: Arch Linux" />)
        terminal.console.push(<TerminalText text="Host: Berikai" />)
        terminal.console.push(<TerminalText text="Kernel: 5.4.0-80-generic" />)
        terminal.console.push(<TerminalText text="Uptime: 3 hours" />)
        terminal.console.push(<TerminalText text="Packages: 17" />)
        terminal.console.push(<TerminalText text="Shell: bash 5.0.17" />)
        terminal.console.push(<TerminalText text="Resolution: 1920x1080" />)
    }
})