const express = require("express");

const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

router.post("/", function (req, res) {
  console.log("viewStudentTest");
  const id = req.body.id;
const name = req.body.name;
  // Signed in?
  if (req.session.username) {
    const test = await monglue.Test.find_one({
        id: id,
        name: name
    });
    // Valid test check
    if (test == null) {
      res.status(401).send({ error: "BAD ID" });
    } else {
      res.status(200).send(test);
    }
  } else {
    res.send(401).send({
      error: "NOT SIGNED IN",
    });
  }
});

module.exports = router;
