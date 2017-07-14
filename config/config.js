'use strict';

const userDDBB = {
	"user": "admin",
	"pass": "******"
};

const server = {
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'localhost'
};

const dbURI = generateDBConnection.call(this, userDDBB.user, userDDBB.pass)

function generateDBConnection(user, pass) {
  // return "mongodb://" + user + ":" + pass + "@ds147052.mlab.com:47052/animal-protection";
	return "mongodb://127.0.0.1:27017/associations";
}

module.exports = {
	dbURI: dbURI,
	server: server
};
