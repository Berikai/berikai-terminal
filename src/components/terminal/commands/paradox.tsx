import BrowserWindow from "../../BrowserWindow"
import GenerateID from "../../scripts/GenerateID"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Open the same site in a new window",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text="Opening berikai.dev..." />)

        const new_id = GenerateID()
        const new_process = <BrowserWindow id={new_id} key={new_id}><iframe src="https://berikai.dev" width="100%" height="100%"></iframe></BrowserWindow>
        terminal.newProcess(new_id, new_process)
    }
})