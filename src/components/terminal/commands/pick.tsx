import { Processes, getState } from "../Processes"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Pull a process window to the top of the stack",
    hidden: true,
    execute: (arg) => {
        Processes.forEach((process, index) => {
            if (process[0] == arg[0]) {
                if (index == 0) {
                    terminal.console.push(<TerminalText text="Process already at the top of the stack." />)
                    return
                }

                Processes.splice(index, 1);
                Processes.unshift(process);
                getState([...Processes])
                
                terminal.console.push(<TerminalText text="Process moved to the top of the stack." />);
            }
        })
    }
})