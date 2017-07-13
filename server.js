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
mongoose.connect('mongodb://127.0.0.1:27017');

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
	console.log('Connection Successfully!!');
});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO
// Here you should load express routes instead of set all the routes in this file

app.get('/', function(req, res) {
	res.send('Bazinga!!!!');
});

app.get('/associations', associationsCtrl.getAllAssociations);

app.get('/associations/:associationId', associationsCtrl.getAssociationById);

app.listen(config.server, function() {
	console.log(`App running in http://${config.server.host}:${config.server.port}`);
});
