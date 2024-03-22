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
                if (inputRef && inputRef.current) {
                    inputRef.current.focus();
                }
            }, 0);
        }

        if (e.key === "ArrowUp") {
            const input = e.target as HTMLInputElement;
            terminal.history.cursor = Math.max(0, terminal.history.cursor - 1);
            input.value = terminal.history[terminal.history.cursor];
        }

        if (e.key === "ArrowDown") {
            const input = e.target as HTMLInputElement;
            terminal.history.cursor = Math.min(terminal.history.length - 1, terminal.history.cursor + 1);
            input.value = terminal.history[terminal.history.cursor];
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