import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "About me",
    hidden: false,
    execute: () => {
        terminal.console.push(<TerminalText text="I am a software enthusiast and music producer." />)
        terminal.console.push(<TerminalText text={<span><strong>Github: </strong><a href="https://www.github.com/Berikai">[<span class="text-gray-400"> Berikai </span>]</a></span>} />)
        terminal.console.push(<TerminalText text={<span><strong>Soundcloud: </strong><a href="https://soundcloud.com/verdantbass">[<span class="text-gray-400"> Verdant </span>]</a></span>} />)
    }
})