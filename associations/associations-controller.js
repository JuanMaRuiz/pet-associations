'use strict';

const mongoose = require('mongoose');
const Associations = mongoose.model('Associations');

module.exports.getAllAssociations = function(req, res) {
	Associations.find({}, function(error, association) {
		if(error) res.send(err) ;
		console.log('Association: ', association);
		res.json(association);
	});
};
