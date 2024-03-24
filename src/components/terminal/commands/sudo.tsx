export default terminal => ({
    description: "Run commands as superuser",
    hidden: true,
    execute: (args) => {
        terminal.commands[args[0]].execute(...[args.slice(1)])
    }
})