'use strict';

var config 		= require('../config');
var Mongoose 	= require('mongoose');

// Connect to the database
// construct the database URI and encode username and password.
var dbURI = "mongodb://" + 
			encodeURIComponent(config.db.username) + ":" + 
			encodeURIComponent(config.db.password) + "@" + 
			config.db.host + ":" + 
			config.db.port + "/" + 
			config.db.name;

var dbURI2 = "mongodb://chatts:3dtdCRULukL7U77FAQeedqkgNMbM7SZyOwTYEvKAgaMUbYlvqePyl6UrKaH5Ojrw0j8s5epMYtmEUjmI4KByUg==@chatts.documents.azure.com:10250/chatts?ssl=true&sslverifycertificate=false";
var dbURI3 = "mongodb://chatts:3dtdCRULukL7U77FAQeedqkgNMbM7SZyOwTYEvKAgaMUbYlvqePyl6UrKaH5Ojrw0j8s5epMYtmEUjmI4KByUg==@chatts.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
Mongoose.connect(dbURI3);

// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
	if(err) throw err;
});

// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

module.exports = { Mongoose, 
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};
