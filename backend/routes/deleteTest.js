const express = require("express");
const router = express.Router();
const monglue = require('../app');

router.post('/', async function (req, res) {

  const id = req.body.testID;

  // Checking for test id validity
  if (await monglue.Test.find({testID: id}).countDocuments() == 0) {
    res.status(404).send({error: `can't find test with id: ${id}`});
    return;
  };

  // Delete Test with given id: dTest
  await monglue.Test.deleteOne( { testID: id } );

  // Success message
  res.send({"success": `test with id:${id}, has been deleted`})

});

module.exports = router;
