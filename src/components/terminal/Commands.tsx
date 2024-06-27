import ableton from "./commands/ableton"
import about from "./commands/about"
import background from "./commands/background"
import card from "./commands/card"
import clear from "./commands/clear"
import code from "./commands/code"
import echo from "./commands/echo"
import exit from "./commands/exit"
import help from "./commands/help"
import music from "./commands/music"
import neofetch from "./commands/neofetch"
import paradox from "./commands/paradox"
import poweroff from "./commands/poweroff"
import process from "./commands/process"
import reboot from "./commands/reboot"
import rm from "./commands/rm"
import socials from "./commands/socials"
import sudo from "./commands/sudo"
import _terminal from "./commands/terminal"

export default terminal => ({
    help: help(terminal),

    // About commands
    about: about(terminal), // Visible
    card: card(terminal), // Visible
    music: music(terminal), // Visible
    socials: socials(terminal), // Visible

    // Window Applications
    code: code(terminal),
    paradox: paradox(terminal),
    ableton: ableton(terminal),

    // Terminal commands
    clear: clear(terminal),
    exit: exit(terminal),
    terminal: _terminal(terminal),
    process: process(terminal), 
    background: background(terminal),

    // Terminal Applications
    neofetch: neofetch(terminal),

    // Linux commands
    sudo: sudo(terminal),   
    echo: echo(terminal),
    rm: rm(terminal),
    reboot: reboot(terminal),
    poweroff: poweroff(terminal),
})