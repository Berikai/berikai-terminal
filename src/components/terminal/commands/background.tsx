import backgroundRandomizer from "../../scripts/BackgroundRandomizer"
import { TerminalText } from "../TerminalTexts"

let bgState = null
export const setBgState = (bg) => {
    bgState = bg
}

export const changeBg = (arg) => {
     if (arg == "blue") {
        bgState("bg-cyan-500")
     } else if (arg == "green") {
        bgState("bg-green-400")
     } else if (arg == "orange") {
        bgState("bg-orange-400")
     }  else if (arg == "violet") {
        bgState("bg-violet-500") 
     } else if (arg == "default") {
        bgState("bg-gray-200")
     } else if (arg == "random") {
        bgState(backgroundRandomizer())
     } else {
        bgState(arg)
     }
}

export default terminal => ({
    description: "Change background color",
    hidden: true,
    execute: (args) => {
        if (args.length === 0) {
            terminal.console.push(<TerminalText text="Available arguments: default, random, blue, green, orange, violet" />)
        } else {
            changeBg(args[0])
        }
    }
})