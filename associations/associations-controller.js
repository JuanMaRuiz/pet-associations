'use strict';

const mongoose = require('mongoose');
const Associations = mongoose.model('Associations');

module.exports.getAllAssociations = function(req, res) {
	Associations.find({}, function(err, association) {
		if(err) res.send(err) ;
		res.json(association);
	});
};

module.exports.getAssociationById = function(req, res) {
  Associations.findById(req.params.associationId, function(err, association) {
    if(err) res.send(err);
    res.json(association);
  });
};
