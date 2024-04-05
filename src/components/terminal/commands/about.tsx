import TypeWriter from "../../scripts/TypeWriter"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "About me",
    hidden: false,
    execute: () => {
        terminal.setContinue(true)
        terminal.continue = true
        const texts = [
            "Hello! I'm Berikai, also known as Verdant.",
            "I'm a software enthusiast and a bass music producer.",
            "Type 'socials' to reach me out!"
        ]
        const nestedElement = document.getElementById(terminal.id.toString())
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[0]} delay={25}/>} />)
        setTimeout(() => nestedElement.scrollTo(0, nestedElement.scrollHeight), 75)
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[1]} delay={25} init_delay={(texts[0].length * 25 + 1000)}/>} />)
        setTimeout(() => nestedElement.scrollTo(0, nestedElement.scrollHeight), texts[0].length * 25 + 1000 + 75)
        terminal.console.push(<TerminalText text={<TypeWriter text={texts[2]} delay={25} init_delay={(texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000)}/>} />)
        setTimeout(() => nestedElement.scrollTo(0, nestedElement.scrollHeight), (texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000) + 75)
        setTimeout(() => {
            terminal.setContinue(false)
            terminal.continue = false
        }, (texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000) + (texts[2].length * 25 + 1000))
        setTimeout(() => nestedElement.scrollTo(0, nestedElement.scrollHeight), (texts[0].length * 25 + 1000) + (texts[1].length * 25 + 1000) + (texts[2].length * 25 + 1000) + 75)
    }
})