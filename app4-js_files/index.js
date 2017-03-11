var express = require('express');
var bodyParser = require('body-parser');
var port = 7777;
var items = require('./data.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

console.log(items);

app.get('/', function(req, res) {
	console.log("getting: " + items);
  res.status(200).json(items);
});


app.post('/', function (req, res) {
  items.push(req.body);
  console.log("posting new in: " + items);
  res.status(200).json(items);
});



app.listen(port, function() {
	console.log('Listening on port',port);
});
