var express = require('express');
var router = express.Router();

/* GET result page. */
router.post('/result', function(req, res, next) {
  const {name,age} = req.body
  //res.send(`Welcome to : ${name} and ${age}`)
  res.redirect(`/output?name=${name}&age=${age}`)

});

module.exports = router;
