const app = require('express')();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log("Api Server listening on port:" + PORT)
)
