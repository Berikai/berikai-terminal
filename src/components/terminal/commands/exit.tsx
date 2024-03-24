export default terminal => ({
    description: "Exit the terminal window",
    hidden: true,
    execute: () => {
        terminal.exit()
    }
})