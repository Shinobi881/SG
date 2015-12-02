var app = require('./server/server.js');

var port = process.env.PORT || 8000;
// var url = process.env.URL || 'localhost';

app.listen(port);

console.log('Listening on', port);
var results = [];

// DATABASE VARIABLES
// var pg = require('pg');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));