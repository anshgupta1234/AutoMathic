const express = require("express");

const router = express.Router();
const monglue = require("../app");
const session = require("express-session");

router.get('/', function (req, res) {
    console.log("viewStudentTest");
});

module.exports = router;
