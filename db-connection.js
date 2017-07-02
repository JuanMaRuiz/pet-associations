'use strict';

const mongoose = require('mongoose');
const db = mongoose.connection;
const config = require('./config/config');

console.log('config.dbURI: ', config.dbURI);
mongoose.connect(config.dbURI);

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
	console.log('Connection Successfully!!');
})
