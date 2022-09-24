var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Express 1.
  // let name = req.query.name;
  // let age = req.query.age;
  // if (!name&&!age) {
  //   name = "person";
  //   age = "18"
  // }
  // res.send(`Welcome : ${name} and ${age}`)
// Express 2 & 3.
  res.send(`<html>
  <head>
    <title>W3D5</title>
      <script>
        function getStylesheet() {
          const currentTime = new Date().getHours();
          if (currentTime > 18 || currentTime < 6) {
            document.write("<link rel='stylesheet' href='/css/night.css' type='text/css'>");
          }
          else{
            document.write("<link rel='stylesheet' href='/css/day.css' type='text/css'>");
          }
        }
        getStylesheet();
      </script>
      <noscript><link href="/css/style.css" rel="stylesheet"></noscript>
  </head> <body><form action="/result" method="post" name="form">
                    Name<input type="text" id="name" name="name" placeholder="Username">
                    Age<input type="text" id="age" name="age" placeholder="Age">
                    <button>Submit Query</button>
                   </form> </body>
                   </html>`)
});
module.exports = router;
