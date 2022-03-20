const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();
const port = process.env.PORT || 8000;
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const credentials = require('./creds.json');
const credsURI = credentials.credsURI;
const testsURI = credentials.testsURI;

const session = require('express-session');
const router = express.Router();
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const dashboardRoute = require('./routes/dashboard');
const viewStudentTestRoute = require('./routes/viewStudentTest');
const editTestRoute = require('./routes/editTestPost');
const deleteTest = require('./routes/deleteTest');
const generateTest = require('./routes/generateTest');

const credsConnection = mongoose.createConnection(credsURI);
const testsConnection = mongoose.createConnection(testsURI);
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const testSchema = new Schema({
  accessed: Number,
  id: Number,
  name: String,
  problems: Array
});

const versionsSchema = new Schema({
 // TODO
});

const User = credsConnection.model('auth', userSchema, 'auth');
const Test = null;
const Versions = null;

app.use(express.json());
app.use(session({secret: 'AzRiA80aMSe6fIvc', saveUninitialized: true, resave: true}));
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/dashboard', dashboardRoute);
app.use('/ViewStudentTest', viewStudentTestRoute);
app.use('/editTest', editTestRoute);
app.use('/deleteTest', deleteTest);
app.use('/generateTest', generateTest);



app.listen(port, err => {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
  });

module.exports.User = User;
module.exports.Test = Test;
module.exports.credsConnection = credsConnection;
module.exports.testsConnection = testsConnection;
module.exports.testSchema = testSchema;
