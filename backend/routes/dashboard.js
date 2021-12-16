const express = require("express");
const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

router.get('/', async function (req, res) {
  console.log("request received");
  if (req.session.username) {
    // TODO find from collection then sort
    const arr = await monglue.Test.find({});
    res.send(arr);
  } else {
    // TODO error handling
    res.send({ error: "Not logged in" });
  }
});


module.exports = router;