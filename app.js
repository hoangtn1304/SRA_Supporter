var express = require('express');
var app = express();

app.get('/', function(req, res){
        res.send('Hello World Ricky abc 123');
});

module.exports = app;