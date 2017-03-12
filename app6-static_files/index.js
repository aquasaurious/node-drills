var express = require('express');
var bodyParser = require('body-parser');
var port = 7777;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(port, function() {
	console.log('Listening on port',port);
})