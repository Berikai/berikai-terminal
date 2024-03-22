import AbletonWindow from "../AbletonWindow";
import BrowserWindow from "../BrowserWindow";
import { Processes, killProcess, state } from "./Processes";
import { TerminalText } from "./TerminalTexts";

export default terminal => ({
    sudo: {
        description: "Run commands as superuser",
        hidden: true,
        execute: (...args) => {
            terminal.commands[args[0][0]].execute(...[args[0].slice(1)]);
        }
    },
    help: {
        description: "List all available commands (opts: --hidden)",
        hidden: false,
        execute: (...args) => {
            if (args[0][0] !== "--hidden") {
                terminal.console.push(<TerminalText text="Available commands:" />);
                for (const command in terminal.commands) {
                    if (!terminal.commands[command].hidden) {
                        terminal.console.push(<TerminalText text={`- ${command}: ${terminal.commands[command].description}`} />);
                    }
                }
            } else {
                terminal.console.push(<TerminalText text="All available commands:" />);
                for (const command in terminal.commands) {
                    terminal.console.push(<TerminalText text={`- ${command}: ${terminal.commands[command].description}`} />);
                }
            }
        }
    
    },
    about: {
        description: "About me",
        hidden: false,
        execute: () => {
            terminal.console.push(<TerminalText text="I am a software enthusiast and music producer." />);
            terminal.console.push(<TerminalText text={<span><strong>Github: </strong><a href="https://www.github.com/Berikai">[<span class="text-gray-400"> Berikai </span>]</a></span>} />);
            terminal.console.push(<TerminalText text={<span><strong>Soundcloud: </strong><a href="https://www.github.com/Berikai">[<span class="text-gray-400"> Verdant </span>]</a></span>} />);
        }
    },
    card: {
        description: "View my profile card",
        hidden: false,
        execute: () => {
            terminal.console.push(<TerminalText text="Opening berikai.github.io..." />);

            const new_id = Math.random().toString(36).substring(7)
            terminal.newProcess(new_id, <BrowserWindow id={new_id} key={new_id}>
                <iframe src="https://berikai.github.io" width="100%" height="100%"></iframe>
            </BrowserWindow>);
        }
    },
    paradox: {
        description: "Open the same site in a new window",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text="Opening berikai.dev..." />);

            const new_id = Math.random().toString(36).substring(7)
            terminal.newProcess(new_id, <BrowserWindow id={new_id} key={new_id}>
                <iframe src="https://berikai.dev" width="100%" height="100%"></iframe>
            </BrowserWindow>);
        }
    },
    socials: {
        description: "Social media links",
        hidden: false,
        execute: () => {
            terminal.console.push(<TerminalText text={<a href="https://soundcloud.com/verdantbass">[<span class="text-orange-300"> Soundcloud </span>]</a>} />);
            terminal.console.push(<TerminalText text={<a href="https://discord.com/users/verdantbass">[<span class="text-blue-300"> Discord </span>]</a>} />);
            terminal.console.push(<TerminalText text={<a href="https://www.github.com/Berikai">[<span class="text-gray-400"> Github </span>]</a>} />);
            terminal.console.push(<TerminalText text={<a href="https://www.instagram.com/verdantbass">[<span class="text-pink-300"> Instagram </span>]</a>} />);
            terminal.console.push(<TerminalText text={<a href="https://www.twitter.com/verdantbass">[<span class="text-cyan-300"> Twitter </span>]</a>} />);
        }
    },
    music: {
        description: "Listen to my music",
        hidden: false,
        execute: () => {
            terminal.console.push(<TerminalText text="Opening Soundcloud..." />);

            const new_id = Math.random().toString(36).substring(7)
            terminal.newProcess(new_id, <BrowserWindow id={new_id} key={new_id}>
                <iframe width="100%" height="210" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1775443374&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/verdantbass" title="Verdant" target="_blank" style="color: #cccccc; text-decoration: none;">Verdant</a> · <a href="https://soundcloud.com/verdantbass/portakali-soydum-wrockpai" title="portakalı soydum w/rockpai" target="_blank" style="color: #cccccc; text-decoration: none;">portakalı soydum w/rockpai</a></div>
            </BrowserWindow>);
        }
    },
    terminal: {
        description: "Open a new terminal window",
        hidden: true,
        execute: () => {
            terminal.new();
        }
    },
    exit: {
        description: "Exit the terminal window",
        hidden: true,
        execute: () => {
            terminal.exit();
        }
    },
    clear: {
        description: "Clear the console",
        hidden: false,
        execute: () => {
            terminal.clear();
        }
    },    
    kill: {
        description: "Kill the process with the given ID",
        hidden: true,
        execute: (...args) => {
            if (args[0][0] === "" || args[0][0] === undefined) {
                terminal.console.push(<TerminalText text="Please provide a process ID." />);
                return;
            }

            if(args[0][0] == 0) {
                terminal.console.push(<TerminalText text="Cannot kill main terminal window." />);
                return;
            }

            killProcess(args[0][0]);
        }
    },  
    killall: {
        description: "Kill all the processes",
        hidden: true,
        execute: () => {
            const process_ref = Processes.slice(0);
            for (const [id, _] of process_ref) {
                if (id != 0) {
                    killProcess(id);
                } else {
                    terminal.console.push(<TerminalText text="Cannot kill main terminal window." />);
                }
            }
        }
    },
    list: {
        description: "List all open processes",
        hidden: true,
        execute: () => {
            Processes.forEach(([id, _process], index) => {
                terminal.console.push(<TerminalText text={(index + 1) + ". " + id} />);
            });
        }
    },
    id: {
        description: "Shows the process ID of the current terminal window",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text={terminal.id} />);
        }
    },
    chgid: {
        description: "Change the process ID of the current terminal window (0 = main terminal window)",
        hidden: true,
        execute: (...args) => {
            if (args[0][0] === "" || args[0][0] === undefined) {
                terminal.console.push(<TerminalText text="Please provide a new ID." />);
                return;
            }

            Processes.forEach(([id, _process]) => {
                if (id === args[0][0]) {
                    terminal.console.push(<TerminalText text="ID already exists." />);
                    return;
                }
            });

            Processes.forEach(([id, _process], index) => {
                if (id === terminal.id) {
                    Processes[index][0] = args[0][0];
                }
            });

            terminal.id = args[0][0];
            terminal.console.push(<TerminalText text="ID changed." />);
        }
    },
    echo: {
        description: "Echo the given text",
        hidden: true,
        execute: (...args) => {
            terminal.console.push(<TerminalText text={args.join('').replaceAll(',', ' ') == "" ? "\v" : args.join('').replaceAll(',', ' ')} />);
        }
    },
    neofetch: {
        description: "Show system information",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text="OS: Web Browser" />);
            terminal.console.push(<TerminalText text="Host: Berikai" />);
            terminal.console.push(<TerminalText text="Kernel: 5.4.0-80-generic" />);
            terminal.console.push(<TerminalText text="Uptime: 3 hours" />);
            terminal.console.push(<TerminalText text="Packages: 17" />);
            terminal.console.push(<TerminalText text="Shell: bash 5.0.17" />);
            terminal.console.push(<TerminalText text="Resolution: 1920x1080" />);
        }
    },
    ableton: {
        description: "Open Ableton Live",
        hidden: true,
        execute: () => {
            terminal.console.push(<TerminalText text="Opening Ableton Live..." />);

            const new_id = Math.random().toString(36).substring(7)
            terminal.newProcess(new_id, <AbletonWindow id={new_id} key={new_id} />);
        }
    },
    code: {
        description: "Open this project in VS Code",
        hidden: true,
        execute: () => {
            window.location.href = ("https://github1s.com/Berikai/terminal-emulator-sandbox");
        }
    },
    reboot: {
        description: "Reboot the system",
        hidden: true,
        execute: () => {
            window.location.reload();
        }
    },
    poweroff: {
        description: "Shutdown the system",
        hidden: true,
        execute: () => {
            window.open("about:blank", "_self");
            window.close();
        }
    },
    rm: {
        description: "Remove files or directories",
        hidden: true,
        execute: (...args) => {
            if (args[0][0] === "" || args[0][0] === undefined) {
                terminal.console.push(<TerminalText text="Please provide a file or directory." />);
                return;
            }

            if (args[0][0] === "-rf" && args[0][1] === "/") {
                terminal.console.push(<TerminalText text="Permission denied." />);
                return;
            }

            if (args[0][0] === "-rf" && args[0][1] === ".") {
                terminal.console.push(<TerminalText text="Permission denied." />);
                return;
            }

            if (args[0][0] === "-rf" && args[0][1] === "/*") {
                terminal.console.push(<TerminalText text="Permission denied." />);
                return;
            }

            if (args[0][0] === "-rf" && args[0][1] === "*") {
                terminal.console.push(<TerminalText text="Permission denied." />);
                return;
            }
        }
    },
})