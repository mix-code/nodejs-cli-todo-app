const chalk = require('chalk');
const yargs = require('yargs')
    .command('create', 'Create New Todo', {
        title: {
            description: 'Todo Title',
            type: 'string',
            demandOption: true,
        },
        body: {
            description: 'Todo Body',
            type: 'string',
            demandOption: true,
        },
    })
    .command('list', 'List All Todos')
    .command('show', 'List Single Todo By Index', {
        index: {
            description: 'Todo Index',
            type: 'string',
            demandOption: true,
        }
    })
    .command('remove', 'Remove Single Todo By Index', {
        index: {
            description: 'Todo Index',
            type: 'string',
            demandOption: true,
        }
    })
    .command('toggle', 'Toggle Single Todo Completed Status By Index', {
        index: {
            description: 'Todo Index',
            type: 'string',
            demandOption: true,
        }
    })
    .demandCommand(1)
    .argv;

console.log(`\n=== ${chalk.cyanBright('Todo App Lunched')} ===\n`);

const Todo = require('./todo');

// Get Command
const command = yargs._[0];

// If Command is Create
if (command === 'create') {
    // Create Todo
    Todo.create(yargs.title, yargs.body);
    console.log(chalk.greenBright('Todo Created'));
}

if(command === 'list') {
    // Fetch All Data
    const db = Todo.list();

    // Print All Data
    db.forEach((todo, index) => {
        let completeMessage = todo.completed ? 'Completed' : 'Not Completed';

        let colorMethod = todo.completed ? 'greenBright' : 'redBright';
        
        console.log(chalk[colorMethod](`[${index}]: ${todo.title} (${completeMessage})`))
    });
}

if (command === 'show') {
    // Print Todo
    console.log(Todo.show(yargs.index));
}

if (command === 'remove') {    
    // Remove Todo
    Todo.remove(yargs.index)
    console.log(chalk.greenBright('Todo Deleted'));
}

if (command === 'toggle') {
    // Toggle Todo Completed Status
    Todo.toggle(yargs.index);
    console.log(chalk.greenBright('Todo Completed Status Updated'));
}