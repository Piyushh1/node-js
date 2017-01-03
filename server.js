

var express = require('express');
var bodyParser = require('body-parser');
var  path = require('path');



var app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/views')));
app.use(express.static(path.join(__dirname + '/public')));

 app.get('/', function(req, res) {
     res.sendFile(__dirname + '/views/form.html');
 })

 app.use(require('./controllers'));
 app.listen(3500);
 console.log("API is running on port 3500");
