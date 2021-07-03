var express = require('express')
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'\\public'));
app.set('view engine','ejs');

app.get("/",(req,res) =>{
    res.render('index')
})
app.get("/registred",(req,res) =>{
    res.render('desktop2')
})
app.get("/security",(req,res) =>{
    res.render('desktop3')
})
app.get("/dashboard",(req,res) =>{
    res.render('desktop4')
})

app.listen(5500,() => {
    console.log(`App started at port`)     
})