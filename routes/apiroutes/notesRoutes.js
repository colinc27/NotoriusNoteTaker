const router = require("express").Router();
const { creatNote, } = require("../../lib/notes.js");
const { notes } = require("../../db/db.json");

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.toString();
    const note = creatNote(req.body, notes);
    res.json(note);
});

module.exports = router;