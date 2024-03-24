export default terminal => ({
    description: "Clear the console",
    hidden: false,
    execute: () => {
        terminal.clear()
    }
})