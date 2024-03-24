import ableton from "./commands/ableton"
import about from "./commands/about"
import card from "./commands/card"
import changeid from "./commands/changeid"
import clear from "./commands/clear"
import code from "./commands/code"
import echo from "./commands/echo"
import exit from "./commands/exit"
import help from "./commands/help"
import id from "./commands/id"
import kill from "./commands/kill"
import killall from "./commands/killall"
import list from "./commands/list"
import music from "./commands/music"
import neofetch from "./commands/neofetch"
import paradox from "./commands/paradox"
import pick from "./commands/pick"
import poweroff from "./commands/poweroff"
import reboot from "./commands/reboot"
import rm from "./commands/rm"
import socials from "./commands/socials"
import sudo from "./commands/sudo"
import _terminal from "./commands/terminal"

export default terminal => ({
    sudo: sudo(terminal),
    help: help(terminal),
    about: about(terminal),
    card: card(terminal),
    paradox: paradox(terminal),
    socials: socials(terminal),
    music: music(terminal),
    terminal: _terminal(terminal),
    exit: exit(terminal),
    clear: clear(terminal),    
    kill: kill(terminal),  
    killall: killall(terminal),
    list: list(terminal),
    id: id(terminal),
    pick: pick(terminal),
    changeid: changeid(terminal),
    echo: echo(terminal),
    neofetch: neofetch(terminal),
    ableton: ableton(terminal),
    code: code(terminal),
    reboot: reboot(terminal),
    poweroff: poweroff(terminal),
    rm: rm(terminal),
})