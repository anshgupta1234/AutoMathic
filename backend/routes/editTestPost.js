const express = require("express");
const router = express.Router();
const monglue = require("../app");

router.post('/', async function(req, res) {

    const id = req.body.testID;

    /* checks for if test id is valid*/
    if (await monglue.Test.find({testID: id}).countDocuments() == 0) {
        res.status(404).send({error: `no test found under id: ${id}`});
        return;
    }

    const test = await monglue.Test.findOne({testID: id});

    /* code here */

    res.send({"success": `test with id: ${id} has been edited`});

});

module.exports = router;