var express = require('express');
var bodyparser = require('body-parser');

const app = express();

app.listen(3000, function() {
    console.log("Escuchando en puerta 3000");
});