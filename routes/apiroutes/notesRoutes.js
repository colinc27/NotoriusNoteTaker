const router = require("express").Router();
const { creatNote, } = require("../../lib/notes.js");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });
  
  router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
    const note = creatNote(req.body, notes);
    res.json(note);
});

module.exports = router;