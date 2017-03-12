var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = 3000;
var app = express();
var data = [];

app.use(bodyParser.json());
app.use(session({
    secret: "bnyhny",
    saveUninitialized: true,
    resave: true
}));

app.get('/load', function(req, res) {
    data = req.session.data;
    res.send(data);
});


app.post('/save', function(req, res) {
    req.session.data = data;
    res.send(data);
});



app.listen(port, function() {
  console.log('listening to port ', port);
});