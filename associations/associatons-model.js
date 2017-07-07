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

module.exports = mongoose.model('Associations', associationsSchema);
