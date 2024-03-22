import Window from "./Window";
import { killProcess } from "./terminal/Processes";

export default function BrowserWindow({id, children}) {
    return (
        <Window onClose={() => killProcess(id)}>
            {children}
        </Window>
    );
};