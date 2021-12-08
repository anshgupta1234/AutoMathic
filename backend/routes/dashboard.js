const express = require("express");
const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

router.get("/", function (req, res, next) {
  if (req.session.user) {
    // TODO find from collection then sort
  } else {
    // TODO error handling
  }
});

module.exports = router;
