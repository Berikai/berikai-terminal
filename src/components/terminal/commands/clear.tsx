export default terminal => ({
    description: "Clear the console",
    hidden: true,
    execute: () => {
        terminal.clear()
    }
})