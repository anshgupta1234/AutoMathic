const express = require('express');
const router = express.Router();
const monglue = require('../app');
const session = require('express-session');
const bcrypt = require('bcryptjs');

router.post('/', function(req, res) {
  let key = req.body.id;
  // Assuming a Versions Json exists
  const test = await monglue.Versions.find_one({id: key});
  if (test === null){
    res.status(401).send({error: "Invalid id"});
  }
  else {
    res.status(200).send(test);
  }
   // Use the algo
});
