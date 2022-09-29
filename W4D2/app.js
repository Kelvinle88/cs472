const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};
let listAnswer = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    console.log(req.body);
    list[req.body.fname + " " + req.body.lname + " " + req.body.date] = { ...req.body };
    res.status(200);
    res.end();
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});
app.get("/8ball", (req, res) => {
    if(req.query.question){
        res.render("8ball",{question:req.query.question,answer:listAnswer[Math.floor(Math.random() * listAnswer.length)]});
    }
    else{
        res.render("8ball")
    }
});

app.listen(3000,()=>console.log('Port 3000 running'));