const express = require("express");
const { db } = require("../database");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  db.find({}, (err, docs) => {
    console.log(docs);
    res.render("index", { title: "Mini Message Board", messages: docs });
  })

});

module.exports = router;
