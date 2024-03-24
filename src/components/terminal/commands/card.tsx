import BrowserWindow from "../../BrowserWindow"
import GenerateID from "../../scripts/GenerateID"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "View my card",
    hidden: false,
    execute: () => {
        terminal.console.push(<TerminalText text="Opening berikai.github.io..." />)
        
        const new_id = GenerateID()
        const _tailwind_gen = <div class="h-[52rem] w-[28rem]"></div>;_tailwind_gen
        const new_process = <BrowserWindow height={'[52rem]'} weight={'[28rem]'} id={new_id} key={new_id}><iframe src="https://berikai.github.io" width="100%" height="100%"></iframe></BrowserWindow>
        terminal.newProcess(new_id, new_process)
    }
})