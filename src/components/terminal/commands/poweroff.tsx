export default terminal => ({
    description: "Shutdown the system",
    hidden: true,
    execute: () => {
        window.open("about:blank", "_self")
        window.close()
    }
})