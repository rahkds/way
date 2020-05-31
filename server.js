var express = require('express');
var app = express();
var bodyParser = require('body-parser');

require('./App/Config/config');
require('./App/Config/connection');



app.use(bodyParser.json({
	//limit: '50mb'
}));

app.use(express.static(__dirname + '/public'));


var mainRoute = require('./App/Routes/route.js');



app.use('/way/admin/', mainRoute);


app.get('/ping', function(req, res) {
	return res.send('pong');
});

app.listen(8081, function(req, res) {
	console.log('listening on port' + 8081);
});