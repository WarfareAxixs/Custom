// interpreter.js

const commands = {};

function defineCommand(command, args) {
    commands[command] = args;
}

function executeCommand(command) {
    if (commands[command]) {
        const [a, b] = commands[command];
        return `${a} + ${b} = ${a + b}`;
    } else {
        return 'Error: Command not defined';
    }
}

function interpretCommand(input) {
    const parts = input.trim().split(' ');
    const action = parts[0];

    if (action === 'define' || action === 'def') {
        const [command, args] = input.match(/define (\w+)\((\d+),(\d+)\)/).slice(1, 4);
        defineCommand(command, [parseFloat(args[0]), parseFloat(args[1])]);
        return `Defined command ${command} with args (${args[0]}, ${args[1]})`;
    } else if (action === 'exe') {
        const command = parts[1];
        return executeCommand(command);
    } else {
        return 'Error: Unknown command or invalid format';
    }
}
