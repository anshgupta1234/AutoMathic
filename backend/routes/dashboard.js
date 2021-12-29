const express = require("express");

const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

function sortByKey(array) {
  // sort by "accessed"
  return array.sort(function (a, b) {
    var x = a["accessed"];
    var y = b["accessed"];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

router.get("/", async function (req, res) {
  console.log("request received");
  if (req.session.username) {
    // Access tests
    const arr = await monglue.Test.find({});
    // Send sorted tests w/ code 200
    res.status(200).send(sortByKey(arr));
  } else {
    // If user is not logged in, send code 401 w/ message: "Not logged in"
    res.status(401).send({ error: "Not logged in" });
  }
});

module.exports = router;
