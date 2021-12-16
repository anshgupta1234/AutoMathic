const express = require('express');
const router = express.Router();
const monglue = require('../app');
const session = require('express-session');
const bcrypt = require('bcryptjs');


router.post('/', async function(req, res) {
  if (await monglue.User.find({username: req.body.username}).countDocuments() == 0) {
      res.send({"error": "No account with that username exists"});
      return;
  }
  var user = await monglue.User.findOne({username: req.body.username});
  console.log(user.password);
  bcrypt.compare(req.body.password, user.password, function(err, result) {
      if (result) {
          req.session.username = user.username;
          req.session.userID = user._id.toString();
          res.send({"success": "Logged in"});
          console.log(user._id);
          monglue.Test = monglue.testsConnection.model(user._id.toString(), monglue.testSchema, user._id.toString());
          
      } else {
          res.send({"error": "Incorrect password"});
      }
  });
})

router.get('/', (req, res) => {
  if (req.session.username) {
    res.send({"Current user": req.session.username});
  } else {
    res.send({"error": "Not logged in"});
  }
})

module.exports = router;