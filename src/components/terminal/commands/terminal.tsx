export default terminal => ({
    description: "Open a new terminal window",
    hidden: true,
    execute: () => {
        terminal.new()
    }
})