'use strict';

const config = require('./config/config');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connection;

const associations = require('./associations/associatons-model');
const associationsCtrl = require('./associations/associations-controller');

// DB connection
mongoose.connect(config.dbURI);

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
	console.log('Connection Successfully!!');
});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO
// Here you should load express routes instead of set all the routes in this file

app.get('/api', function(req, res) {
	res.send(config.welcomeMsg);
});

app.get('/api/associations', associationsCtrl.getAllAssociations);

app.get('/api/associations/:associationId', associationsCtrl.getAssociationById);

app.listen(config.server, function() {
  // console.log('server address: ', server.address().address);
  // console.log('server port: ', server.address().port);
	console.log(`App running in http://${config.server.host}:${config.server.port}`);
});

module.exports = app; // app needs to be exported for testing purposes
