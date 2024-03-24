import { useState } from "preact/hooks"
import TypeWriter from "../../scripts/TypeWriter"
import { TerminalText } from "../TerminalTexts"

let state = null
export const setState = (_state) => {
    state = _state
} 

export default terminal => ({
    description: "About me",
    hidden: false,
    execute: () => {
        terminal.continue = true
        state(terminal.continue)
        const texts = [
            "Hello! I'm Berikai, also known as Verdant.",
            "I'm a software enthusiast and a bass music producer.",
            "Type 'socials' to reach me out!"
        ]
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[0]} delay={25}/>} />)
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[1]} delay={25} init_delay={(texts[0].length * 25 + 1000)}/>} />)
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[2]} delay={25} init_delay={(texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000)}/>} />)
        setTimeout(() => {
            terminal.continue = false
            state(terminal.continue)
        }, (texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000) + (texts[2].length * 25 + 1000))
    }
})