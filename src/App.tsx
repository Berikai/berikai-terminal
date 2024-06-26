import { useEffect, useState, useCallback } from "preact/hooks"
import Welcome from "./components/Welcome"
import { Processes } from "./components/terminal/Processes"
import { setState } from "./components/terminal/Processes"
import Terminal from "./components/terminal/Terminal"
import { setBgState } from "./components/terminal/commands/background"
import { scroll } from "./components/Window"

console.log("%c" + "Hey, wussup!", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;")

export default function App() {
    const [welcome, setWelcome] = useState(1)
    const [processes, setProcesses] = useState(Processes)
    const [background, setBackground] = useState("bg-gray-100")
    setState(setProcesses)
    setBgState(setBackground)

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
    
    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false)
        document.addEventListener("mouseup", keyFunction, false)
    
        return () => {
            document.removeEventListener("keydown", keyFunction, false)
            document.removeEventListener("mouseup", keyFunction, false)
        }
    }, [keyFunction, processes])

    return (
            <div class={background + " min-h-screen"}>
                <div class="flex flex-col items-center justify-center min-h-screen">
                    {welcome && welcome != 2 ? <Welcome 
                        title="Hi, I'm Berikai" 
                        description="Welcome to my terminal emulator sandbox"
                    /> : null}
                    {welcome == 2 ? <Welcome 
                        title="" 
                        description="Press + key to open a new terminal."
                    /> : null}
                    <div class="flex flex-col lg:flex-row flex-wrap items-center justify-center">
                        {processes.map(([_id, process]) => process)}
                    </div>
                </div>
            </div>
    )
}