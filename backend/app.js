const express = require("express");
const app = express();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log('Api Server listening on port: ' + PORT)
);

/*
 * Sample get request handler
 app.get(endpoint, (req, res) => {
   res.status(200).send({
     //JSON
   });
 });
*/
