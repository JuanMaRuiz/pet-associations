'use strict';

const express = require('express');
const config = require('./config/config');

const app = express();

app.get('/', function(req, res) {
	res.send('Bazinga!!!!');
});

app.listen(config.server, function() {
	console.log(`App running in http://${config.server.host}:${config.server.port}`);
});
