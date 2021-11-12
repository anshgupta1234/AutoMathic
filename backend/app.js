const express = require('express');
const app = express();
app.use(express.json());


var test = require('./test');

app.use('/test',test);

app.listen(3000);
console.log("Listening on Port 3000!");

