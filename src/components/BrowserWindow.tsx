import Window from "./Window"
import { killProcess } from "./terminal/Processes"

export default function BrowserWindow({id, children, weight = null, height = null, full = false}) {
    if (weight == null) {
        weight = 96
    }

    if (height == null) {
        height = 64
    }
    
    return (
        <Window full={full} weight={weight} height={height} onClose={() => killProcess(id)}>
            {children}
        </Window>
    )
}