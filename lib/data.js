const fs = require('fs');
const notes = require('../db/db.json');
const uuid = require('../helpers/mathfloor.js');

const addNote = (note) => {
    note.id = uuid();
    newArr = (notes) ? newArr = notes : newArr = [];
    newArr.push(note);
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('New Note Added');
    });
    return;
};

module.exports = { addNote }