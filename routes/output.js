var express = require('express');
var router = express.Router();
router.get('/output', function (req, res, next) {
// Express 4.
  let name = req.query.name;
  let age = req.query.age;
  res.send(`Welcome to : ${name} and ${age}`)

})
module.exports =  router;
