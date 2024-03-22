import { useState, useRef } from "preact/hooks";
import { TerminalSessionText } from "./terminal/TerminalTexts";
import Window from "./Window";
import { killProcess } from "./terminal/Processes";

export default function TerminalWindow({terminal}) {
    const [termConsole, setTermConsole] = useState(terminal.console);

    const onTerminalInputSend = (e) => {
        if (e.key === "Enter") {
            const input = e.target as HTMLInputElement;
            const command = input.value;
            input.value = "";

            terminal.log(<TerminalSessionText input={command} />);
            terminal.execute(command);

            setTermConsole([...terminal.console]);

            setTimeout(() => {
                inputRef.current.focus();
            }, 0);

            console.log(terminal.history)
        }

        if (e.key === "ArrowUp") {
            const input = e.target as HTMLInputElement;
            input.value = terminal.history[input.value == "" || terminal.history.indexOf(input.value) == -1 ? terminal.history.length - 1 : terminal.history.indexOf(input.value) - 1];
        }

        if (e.key === "ArrowDown") {
            const input = e.target as HTMLInputElement;
            input.value = terminal.history[terminal.history.indexOf(input.value) == -1 ? 0 : (terminal.history.indexOf(input.value) + 1 < terminal.history.length ? terminal.history.indexOf(input.value) + 1 : 0)]; // Hardly understandable line
        }
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const TerminalInput = () => <input ref={inputRef} autoFocus type="text" class="text-gray-300 bg-transparent outline-none border-none" onKeyDown={onTerminalInputSend}/>
    const TerminalSession = () => <TerminalSessionText input={<TerminalInput />}/>

    return (
        <Window onClose={() => terminal.id == 0 ? alert("Cannot exit main terminal window.") :  killProcess(terminal.id)} onClick={() => inputRef.current.focus()}>
            <div class="p-3">
                {termConsole}
                <TerminalSession />
            </div>    
        </Window>
    );
}