import GetBrowser from "../../scripts/GetBrowser"
import Commands from "../Commands"
import { TerminalText } from "../TerminalTexts"

const uptimeRef = new Date().valueOf()

export default terminal => ({
    description: "Show system information",
    hidden: true,
    execute: () => {
        const currentTime = new Date().valueOf()
        const uptime = Math.floor((currentTime - uptimeRef) / (60 * 1000))
        terminal.console.push(<TerminalText text={`OS: ${GetBrowser()}`} />)
        terminal.console.push(<TerminalText text={`Host: ${window.location.hostname}`} />)
        terminal.console.push(<TerminalText text={`Uptime: ${uptime} minutes`} />)
        terminal.console.push(<TerminalText text={`Packages: ${Object.keys(Commands(null)).length}`} />)
    }
})