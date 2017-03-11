var express = require('express');
var bodyParser = require('body-parser');
var port = 7777;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());



app.get('/', function(req, res) {
  //console.log(Object.keys(req.query));
  if (Object.keys(req.query).length == 0) {
    res.status(200).json(data);
  }
  else res.status(200).json(data.filter(function(item) {
     for (var prop in req.query) {
       console.log(item[prop], req.query[prop]);
       return item[prop] == req.query[prop];
     }
  }));  
});

app.put('/:index', function (req, res) {
  for (var item in req.query) {
    data[req.params.index].item = req.query.item;
  }
  res.status(200).json(data[req.params.index]);
})


app.post('/', function (req, res) {
  data.push(req.body);
  // console.log("posting new in: " + data);
  res.status(200).json(data);
});

app.get('/:index', function(req, res) {
	res.status(200).json(data[req.params.index]);
});

app.delete('/:index', function(req, res) {
	if (req.params.index < data.length) {
    res.status(200).json(data.splice(req.params.index, 1));
  }
});

app.listen(port, function() {
	console.log('Listening on port',port);
})