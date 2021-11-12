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
