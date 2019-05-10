const fs = require('fs');

const getNotes = () => 'Your Note!';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter((item) => {
        return item.title === title;
    });

    if(duplicatedNotes.length === 0) {
        notes.push({title, body});
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.warn('Title is take');
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
    addNote
};