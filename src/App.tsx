import { useEffect, useState, useCallback } from "preact/hooks";
import Welcome from "./components/Welcome";
import { Processes } from "./components/terminal/Processes";
import { setState } from "./components/terminal/Processes";
import Terminal from "./components/terminal/Terminal";

function backgroundRandomizer() {
    const number = Math.floor(Math.random() * 4); // 0, 1, 2, 3 (and 4 if the value is 5)

    switch(number) {
        case 0:
            return "bg-violet-500";
        case 1:
            return "bg-cyan-500";
        case 2:
            return "bg-green-400";
        case 3:
            return "bg-orange-400";
        case 4:
            return "bg-gray-100";
    }
}

const bg = "bg-gray-300"

export default function App() {
    const [welcome, setWelcome] = useState(1);
    const [processes, setProcesses] = useState(Processes);
    const [background, setBackground] = useState("bg-gray-100");
    setState(setProcesses)

    setBackground(bg);

    const terminal = new Terminal(0);

    const keyFunction = useCallback((event) => {
        if (event.key === "+") {
            terminal.new();
        }
        
        if (event.key === "-") {
            if (processes.length > 1/*(processes[0][0] == 0 ? 1 : 0)*/) {
                Processes.pop();
                setProcesses([...Processes]);
            }
        }

        if (event.key && welcome) {
            setWelcome(0);
        }

        if (processes.length === 1 && event.type === "mouseup" && event.target.className.includes("w-3 h-3 rounded-full bg-red-500")) {
            setWelcome(2);
        }

        if (processes.length === 0) {
            setWelcome(2);
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false);
        document.addEventListener("mouseup", keyFunction, false);
    
        return () => {
            document.removeEventListener("keydown", keyFunction, false);
            document.removeEventListener("mouseup", keyFunction, false);
        };
    }, [keyFunction, processes]);

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
    );
}