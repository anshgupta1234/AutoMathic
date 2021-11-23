const express = require('express');
const router = express.Router();
const monglue = require('../app');

router.post('/', async function(req, res, next) {
  if (await monglue.User.find({username: req.body.username}).countDocuments() > 0) {
      res.send({"error": "An account already exists with that username"});
      return;
  }
  if (await monglue.User.find({email: req.body.email}).countDocuments() > 0) {
      res.send({"error": "An account already exists with that email"});
      return;
  }
  var password = req.body.password;
  var hashedPassword = await bcrypt.hash(password, 10);
  const user = new monglue.User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
  });
  await user.save();
  res.send(user);
  next();
})

module.exports = router;