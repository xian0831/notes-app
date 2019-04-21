const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Adding a new note!', argv)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new Note',
    handler: () => {
        console.log('Removing a new note!')
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: () => {
        console.log('Listing notes!')
    }
});

// Create list command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('Reading a notes!')
    }
});


console.log(yargs.argv);