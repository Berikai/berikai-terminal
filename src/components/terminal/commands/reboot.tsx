export default terminal => ({
    description: "Reboot the system",
    hidden: true,
    execute: () => {
        window.location.reload()
    }
})