var express = require('express');
var router = express.Router();

//router.use(function logRequest (req, res, next) {
//	console.log(req.body);
//
//});

router.post('/', function(req,res){
	res.send("WeLoveAnsh!");
});

module.exports = router;
