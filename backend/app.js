const express = require('express');
const app = express();
const PORT = 3000;
//const PORT = process.env.PORT; // Enviornment Variables???
app.use(express.json());


var test = require('./test');

app.use('/test',test);

app.listen(PORT);
console.log("Listening on Port 3000!");
