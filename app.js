var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var indexHtmlPath = path.join(__dirname, 'views/index.html')

app.get('/', function (req, res) {
	res.sendFile(indexHtmlPath);
});
