import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Social media links",
    hidden: true,
    execute: () => {
        terminal.console.push(<TerminalText text={<a href="https://www.github.com/Berikai" target="_blank" rel="noopener noreferrer">[<span class="text-gray-300"> Github </span>]</a>} />)
        terminal.console.push(<TerminalText text={<a href="https://soundcloud.com/verdantbass" target="_blank" rel="noopener noreferrer">[<span class="text-orange-300"> Soundcloud </span>]</a>} />)
        terminal.console.push(<TerminalText text={<a href="https://discord.com/users/verdantbass" target="_blank" rel="noopener noreferrer">[<span class="text-blue-300"> Discord </span>]</a>} />)
        terminal.console.push(<TerminalText text={<a href="https://www.instagram.com/verdantbass" target="_blank" rel="noopener noreferrer">[<span class="text-pink-300"> Instagram </span>]</a>} />)
        terminal.console.push(<TerminalText text={<a href="https://www.twitter.com/verdantbass" target="_blank" rel="noopener noreferrer">[<span class="text-cyan-300"> Twitter </span>]</a>} />)
    }
})