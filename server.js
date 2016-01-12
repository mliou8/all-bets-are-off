var http = require('http');
var server = http.createServer();

server.on('request', require('./app'));

server.listen(1226, function () {
	console.log('Server is listening on port 1226')
});
