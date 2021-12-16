const express = require('express');
const router = express.Router();
const monglue = require('../app');
const session = require('express-session');


router.get('/', (req, res) => {
    req.session.destroy();
    monglue.Test = null;
    res.send({"success": "Logged out"});
})

module.exports = router;