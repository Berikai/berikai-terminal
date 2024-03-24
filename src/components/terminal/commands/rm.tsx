import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Remove files or directories",
    hidden: true,
    execute: (args) => {
        if (args[0] === "" || args[0] === undefined) {
            terminal.console.push(<TerminalText text="Please provide a file or directory." />)
            return
        }

        if (args[0] === "-rf" && args[1] === "/") {
            terminal.console.push(<TerminalText text="Permission denied." />)
            return
        }

        if (args[0] === "-rf" && args[1] === ".") {
            terminal.console.push(<TerminalText text="Permission denied." />)
            return
        }

        if (args[0] === "-rf" && args[1] === "/*") {
            terminal.console.push(<TerminalText text="Permission denied." />)
            return
        }

        if (args[0] === "-rf" && args[1] === "*") {
            terminal.console.push(<TerminalText text="Permission denied." />)
            return
        }
    }
})