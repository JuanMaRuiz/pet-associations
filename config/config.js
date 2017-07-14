'use strict';

const welcomeMsg = 'Bazinga!! You did it! You now are connected to our fancy API'

const userDDBB = {
	"user": "admin",
	"pass": "******"
};

const server = {
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'localhost'
};

const dbURI = "mongodb://127.0.0.1:27017";

module.exports = {
	dbURI,
	server,
  welcomeMsg
};
