import { useEffect, useState, useCallback } from "preact/hooks"
import { createContext } from "preact"
import Welcome from "./components/Welcome"
import { Processes } from "./components/terminal/Processes"
import { setState } from "./components/terminal/Processes"
import Terminal from "./components/terminal/Terminal"
import { setBgState } from "./components/terminal/commands/background"
import { scroll } from "./components/Window"
import Github from "./github-mark.svg"

console.log("%c" + "Hey, wussup!", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;")

export const GlobalStateContext = createContext({ Zglobal: 0, setZglobal: (x) => {} })

export default function App() {
    const [welcome, setWelcome] = useState(1)
    const [processes, setProcesses] = useState(Processes)
    const [background, setBackground] = useState("bg-gray-100")
    setState(setProcesses)
    setBgState(setBackground)

    const tips = [
        "💡 Type 'code' to open this project in VSCode!",
        "‍🎧 Let's party, type 'music'",
        "💻 You can navigate bash history with ⬆️ and ⬇️ keys",
        "👀 For system information, type 'neofetch'",
        "🧹🗑️ Keep it clean, type 'clear'",
        "🎀 Felt cute? Type 'background pink' ~<3",
        "🗣️ Try running 'echo hello world'",
        "🔌 Type 'poweroff' to pull the plug",
        "🔄 Need a fresh start? Typing 'reboot' is easy",
        "🔍 Want to explore furthermore? Type 'help -a' for all commands",
        "🤔 Did you know that you can float windows? Try it out!",
        "🪟 Windows are resizable! Drag the bottom right corner",
        "🥴 I feel like I'm running out of tips...",
        "🤯 Did you know that you can run multiple terminals at once?",
        "♾️ I wonder what does 'paradox' do...",
        "🐉 Make your terminal immortal, type 'process change-id 0'",
        "🔥 Did you know that you can change the background color?",
        "🎲 Type 'background random' to get a random background color",
        "🔑 No need to use 'sudo', you're already root!",
        "🤪 Luckily, you can't break anything here!",
        "😏 You are not root enough to do 'rm -rf /', lol",
        "🃏 I have a cool 'card', type it out!",
    ]
    const [tip, setTip] = useState(tips[Math.floor(Math.random() * tips.length)])

    const [Zglobal, setZglobal] = useState(1)

    const terminal = new Terminal(0)

    const keyFunction = useCallback((event) => {
        if (event.key === "+") {
            terminal.new()
        }
        
        if (event.key === "Escape") {
            if (processes[0] && processes.length > (processes[0][0] == 0 ? 1 : 0)) {
                if (processes[processes.length - 1][0] != 0) { 
                    Processes.pop()
                } else {
                    Processes.splice(processes.length - 2, 1)
                }

                setProcesses([...Processes])

                // TODO: Do not use setTimeout
                setTimeout(() => {
                    if(document.body.style.overflow != "") {
                        if(document.getElementsByClassName("absolute z-[1000]").length == 0) {
                            document.body.style.overflow = ""
                            window.scrollTo(0, scroll)
                        }
                    }
                }, 10)
            }
        }

        if (event.key && welcome) {
            setWelcome(0)
        }

        if (event.type === "mouseup" && event.target.className.includes("w-3 h-3 rounded-full bg-green-")) {
            setWelcome(0)
        }

        if (processes.length === 1 && event.type === "mouseup" && event.target.className.includes("w-3 h-3 rounded-full bg-red-")) {
            setWelcome(2)

            if(processes[0][0] == 0) {
                setWelcome(0)
            }
        }

        if (processes.length === 0) {
            setWelcome(2)
        }
    }, [])

    const tapToCreateTerminal = useCallback((e) => {
        terminal.new()
        document.removeEventListener("mousedown", this, false)

        if (e.type === "mousedown" && welcome) {
            setWelcome(0)
        }
    }, [])
    
    useEffect(() => {
        document.getElementsByTagName("body")[0].className = background

        document.addEventListener("keydown", keyFunction, false)
        document.addEventListener("mouseup", keyFunction, false)

        if (processes.length === 0) {
            document.addEventListener("mousedown", tapToCreateTerminal, false)
        }
    
        return () => {
            document.removeEventListener("mousedown", tapToCreateTerminal, false)
            document.removeEventListener("keydown", keyFunction, false)
            document.removeEventListener("mouseup", keyFunction, false)
        }
    }, [keyFunction, processes, background])

    return (
        <GlobalStateContext.Provider value={{ Zglobal, setZglobal }}>
            <div class={background + " min-h-screen"}>
                <div class="flex flex-col items-center justify-center min-h-screen">
                    <div class="absolute" style="margin-bottom:25rem;">
                        {welcome && welcome != 2 ? <Welcome 
                            title="Hi, I'm Berikai" 
                            description={["Welcome to my terminal emulator sandbox", <text class="text-sm text-gray-500">{tip}</text>]}
                        /> : null}
                    </div>
                    {welcome == 2 ? <Welcome 
                            title="" 
                            description={["Press + key to open a new terminal"]}
                        /> : null}
                    <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center z-10">
                        {processes.map(([_id, process]) => process)}
                    </div>
                </div>
            </div>
        </GlobalStateContext.Provider>
    )
}