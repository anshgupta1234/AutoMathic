<<<<<<< HEAD
const express = require('express');
const app = express();
app.use(express.json());


var test = require('./test');

app.use('/test',test);

app.listen(3000);
console.log("Listening on Port 3000!");
=======
const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log("Api Server listening on port:" + PORT));

/*
 * Sample get request handler
 *app.get(endpoint, (request, response) => {
 *  request.status(200).send({
 *    // JSON DATA
 *  }
 *  )
 *});
 */
>>>>>>> a4f31a8cd7c2fc79fae7d89b600128c38d5e2b7b
