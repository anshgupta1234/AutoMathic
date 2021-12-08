const express = require('express')
const {MongoClient} = require('mongodb');
const app = express();
const port = process.env.PORT || 8000;
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const uri = "mongodb+srv://cdevadhar:7NoS9MpSdVdjpEE3@cluster0.rboci.mongodb.net/creds?retryWrites=true&w=majority";

const session = require('express-session');
const router = express.Router();
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const dashboardRoute = require('./routes/logout');


const connection = mongoose.createConnection(uri);
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

const User = connection.model('auth', userSchema, 'auth');
const Test = connection.model('auth', testSchema, 'auth');

app.use(express.json());
app.use(session({secret: 'ssshhhhh', saveUninitialized: true, resave: true}));
app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);



app.listen(port, err => {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
  });

module.exports.connection = connection;
module.exports.User = User;
