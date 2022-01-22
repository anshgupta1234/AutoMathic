
const express = require('express');
const router = express.Router();
const monglue = require('../app');
const session = require('express-session');
router.post('/', async function (req, res) {
  let key = req.body.id;
  if (req.session.username){
    const test = await monglue.Test.find_one({id: key})
    if (test === null){
      res.status(401).send({error: "Invalid id"});
    }
    else {
      res.status(200).send(test);
    }

  }
  else {
    res.send(401).send({error: "Not logged in"});
  }

});
module.exports = router;
