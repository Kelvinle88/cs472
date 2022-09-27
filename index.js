const express = require('express')
const session = require('express-session')
const  app = express();
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"));

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'thisissecrect',
    saveUninitialized: true,
    resave: true,
    cookie:{maxAge:(1000*60*60*24*7)}
}))

var controllerProduct = require('./controllers/product')
var controllerHome = require('./controllers/home')
var controllerResult = require('./controllers/result')
var controllerOutput = require('./controllers/output')
var controllerAddCart = require('./controllers/addcart')
var controllerCart = require('./controllers/cart')

app.get('/',controllerHome);
app.post('/result',controllerResult)
app.get('/output',controllerOutput)
app.post('/addtocart',controllerAddCart)
app.get('/product',controllerProduct)
app.get('/cart',controllerCart)



app.listen(3000,()=>console.log("server running at port 3000"))