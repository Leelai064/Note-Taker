const router = require('express').Router();
const data = require('../db/db.json');

const { addNote } = require('../lib/data.js');

router.get('/notes', (req, res) => {
    res.send(data)
});

router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});

module.exports = router;