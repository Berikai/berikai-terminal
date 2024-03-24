import BrowserWindow from "../../BrowserWindow"
import GenerateID from "../../scripts/GenerateID"
import { TerminalText } from "../TerminalTexts"

export default terminal => ({
    description: "Listen to my music",
    hidden: false,
    execute: () => {
        terminal.console.push(<TerminalText text="Opening Soundcloud..." />)

        const new_id = GenerateID()
        const new_process = <BrowserWindow id={new_id} key={new_id}><iframe width="100%" height="210" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1775443374&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/verdantbass" title="Verdant" target="_blank" style="color: #cccccc; text-decoration: none;">Verdant</a> · <a href="https://soundcloud.com/verdantbass/portakali-soydum-wrockpai" title="portakalı soydum w/rockpai" target="_blank" style="color: #cccccc; text-decoration: none;">portakalı soydum w/rockpai</a></div></BrowserWindow>
        terminal.newProcess(new_id, new_process)
    }
})