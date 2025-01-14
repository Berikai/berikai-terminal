import Window from "./Window"
import { killProcess } from "./terminal/Processes"

export default function BrowserWindow({id, children, width = null, height = null, full = false}) {
    if (width == null) {
        width = 96
    }

    if (height == null) {
        height = 64
    }
    
    return (
        <Window full={full} width={width} height={height} onClose={() => killProcess(id)}>
            {children}
        </Window>
    )
}