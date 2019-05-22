const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function ({title, body}) {
        notes.addNote(title, body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new Note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }
    },
    handler: ({title}) => {
        notes.removeNote(title);
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


yargs.parse();
