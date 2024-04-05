import { Processes, getState, killProcess } from "../Processes"
import { TerminalText } from "../TerminalTexts"

const commands = terminal => ({
    pick: {
        description: "Pick a process window to be the first in the stack",
        hidden: true,
        execute: (arg) => {
            Processes.some((process, index) => {
                let process_id = arg[0]

                if (process_id === "" || process_id === undefined) {
                    process_id = terminal.id
                }

                if (process[0] == process_id) {
                    if (index == 0) {
                        terminal.console.push(<TerminalText text="Process already at the top of the stack." />)
                        return true
                    }
    
                    Processes.splice(index, 1);
                    Processes.unshift(process);
                    getState([...Processes])
                    
                    terminal.console.push(<TerminalText text="Process moved to the top of the stack." />);
                    return true
                }
            }) ? null : terminal.console.push(<TerminalText text="Process not found." />);
        }
    },
    list: {
        description: "List all open processes by ID",
        hidden: true,
        execute: () => {
            Processes.forEach(([id, _process], index) => {
                terminal.console.push(<TerminalText text={(index + 1) + ". " + id} />)
            })
        }
    },
    'show-id': {
        description: "Shows the process ID of the current terminal window",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text={terminal.id} />)
        }
    },
    'change-id': {
        description: "Change the process ID of the current terminal window (0 = main terminal)",
        hidden: true,
        execute: (args) => {
            if (args[0] === "" || args[0] === undefined) {
                terminal.console.push(<TerminalText text="Please provide a new ID." />)
                return
            }
    
            Processes.forEach(([id, _process]) => {
                if (id === args[0]) {
                    terminal.console.push(<TerminalText text="ID already exists." />)
                    return
                }
            })
    
            Processes.forEach(([id, _process], index) => {
                if (id === terminal.id) {
                    Processes[index][0] = args[0]
                }
            })
    
            terminal.id = args[0]
            terminal.console.push(<TerminalText text="ID changed." />)
        }
    },
    kill: {
        description: "Kill the process with the given ID",
        execute: (args) => {
            if (args[0] === "" || args[0] === undefined) {
                terminal.console.push(<TerminalText text="Please provide a process ID." />)
                return
            }

            if(args[0] == 0) {
                terminal.console.push(<TerminalText text="Cannot kill main terminal window." />)
                return
            }

            killProcess(args[0])
        }
    },
    killall: {
        description: "Kill all processes",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text="Killing all processes..." />)
            
            const process_ref = Processes.slice(0)
            for (const [id, _] of process_ref) {
                if (id != 0) {
                    killProcess(id)
                } else {
                    terminal.console.push(<TerminalText text="Cannot kill main terminal window." />)
                }
            }
        }
    }
})

export default terminal => ({
    description: "Manage all open processes",
    hidden: true,
    execute: (args) => {
        if (args.length == 0 || args[0] == "help") {
            terminal.console.push(<TerminalText text="Usage: process [command] [args]" />)
            terminal.console.push(<TerminalText text="Commands:" />)
            for(const command in commands(terminal)) {
                terminal.console.push(<TerminalText text={`- ${command}: ${commands(terminal)[command].description}`} />)
            }
        } else {
            const command = args.shift()
            if (commands(terminal)[command]) {
                commands(terminal)[command].execute(args)
            } else {
                terminal.console.push(<TerminalText text={`Command not found: ${command}.`} />)
                terminal.console.push(<TerminalText text={`Type 'process help' to list available commands.`} />)
            }
        }
    }
})