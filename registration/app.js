var bodyParser = require('body-parser');
require('dotenv').config()
var express = require('express')
var app = express();
const Twilio = require('twilio');

app.use(bodyParser.urlencoded({
    extended: true
  }));

/*app.use(express.static(__dirname+'\\public'));*/
app.use(express.static(__dirname+'/public'));

app.set('view engine','ejs');

var test = {}

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

app.get("/alert",(req,res) =>{
    const accountSid = process.env.SID;
    const authToken = process.env.Token;
    

    const client = new Twilio(accountSid, authToken);

    const service = client.notify.services(process.env.Service);

    const notioption = {
        toBinding:[
            JSON.stringify({'binding_type': 'sms', 'address': '+917012434015'}),
            JSON.stringify({'binding_type': 'sms', 'address': '+918078493452'}),
            JSON.stringify({'binding_type': 'sms', 'address': '+917907504373'}),
            JSON.stringify({'binding_type': 'sms', 'address': '+918075876208'}),      
        ],
        body:"Fire in the building Evacute following the routing system"
    }

    service.notifications
    .create(notioption)

    .then(notification => {
        console.log(notification);
    })

    .catch(error => {
        console.log(error);
    })
    .done();
    res.send("Done")
})

app.post("/hardware",(req,res) =>{
    test = req.body
    console.log(test);
    res.send("data sent")
})

app.get("/hardware",(req,res) =>{
    console.log(req.hostname);
    res.json(test)
})

app.listen(process.env.PORT || 3000,() => {
    console.log(`App started at port`)
})