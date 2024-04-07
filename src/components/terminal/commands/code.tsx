import BrowserWindow from "../../BrowserWindow";
import GenerateID from "../../scripts/GenerateID";
import { TerminalText } from "../TerminalTexts";

export default terminal => ({
    description: "Open this project in VS Code",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text="Opening VS Code..." />)

        // TODO: Do not use setTimeout
        setTimeout(() => {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden"
        }, 10)
        
        const new_id = GenerateID()
        const _tailwind_gen = <div class="h-[36rem] w-[48rem]"></div>;_tailwind_gen
        const new_process = <BrowserWindow full={true} height={"[36rem]"} weight={"[48rem]"} id={new_id} key={new_id}><iframe src="https://github1s.com/Berikai/terminal-emulator-sandbox" width="100%" height="100%"></iframe></BrowserWindow>

        terminal.newProcess(new_id, new_process)
    }
})