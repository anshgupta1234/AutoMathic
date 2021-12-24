const express = require("express");

const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

function sortByKey(array) {
  // This works
  return array.sort(function (a, b) {
    var x = a["accessed"];
    var y = b["accessed"];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

router.get('/', async function (req, res) {
  console.log("request received");
  if (req.session.username) {
    const arr = await monglue.Test.find({});
    res.status(200).send(sortByKey(arr));
  } else {
    res.status(401).send({ error: "Not logged in" });
  }
});

module.exports = router;
