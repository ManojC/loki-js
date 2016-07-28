var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

app.use('/', routes);

app.listen(3000, function() {
    console.log('server started!');
});


module.exports = app;
