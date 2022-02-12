const express = require("express");
const router = express.Router();
const monglue = require('../app');

// not tested btw

router.post('/', async function(req, res) {
    const test = new monglue.Test({
        name = req.body.name
    });
    await test.save();
    res.send({"success": true});
    
})

