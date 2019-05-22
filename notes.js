const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Note!';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter((item) => {
        return item.title === title;
    });

    if(duplicatedNotes.length === 0) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Title is taken'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((item) => {
        return item.title !== title;
    });
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

};

module.exports = {
    getNotes,
    addNote,
    removeNote
};