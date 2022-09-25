const express = require('express')
const  app = express();
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"));

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

var controllerProduct = require('./controllers/product')
var controllerHome = require('./controllers/home')
var controllerResult = require('./controllers/result')
var controllerOutput = require('./controllers/output')

app.get('/',controllerHome);
app.post('/result',controllerResult)
app.get('/output',controllerOutput)
// app.post('/addtocart',controllerAddCart)
app.get('/product',controllerProduct)

app.listen(3000,()=>console.log("server running at port 3000"))