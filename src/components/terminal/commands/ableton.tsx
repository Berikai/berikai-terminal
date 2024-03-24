import AbletonWindow from "../../AbletonWindow"
import GenerateID from "../../scripts/GenerateID"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Open Ableton Live",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text="Opening Ableton Live..." />)

        const new_id = GenerateID()
        const new_process = <AbletonWindow id={new_id} key={new_id} />
        terminal.newProcess(new_id, new_process)
    }
})