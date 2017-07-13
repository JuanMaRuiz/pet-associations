'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let associationsSchema = new Schema({
	name: String,
	phone: Array,
	"e-mail": String,
	web: String,
	"social-networks": Array
});

const Associations = mongoose.model('Associations', associationsSchema);
