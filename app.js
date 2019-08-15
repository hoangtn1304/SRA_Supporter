const express = require('express');

let app = express();

app.get('/', function(req, res) {
        return 'OK';
})

module.exports = app;