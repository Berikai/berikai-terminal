import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Echo the given text",
    hidden: true,
    execute: (...args) => {
        terminal.console.push(<TerminalText text={args.join('').replaceAll(',', ' ') == "" ? "\v" : args.join('').replaceAll(',', ' ')} />)
    }
})