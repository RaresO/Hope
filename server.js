'use strict';

// Chat application dependencies
var express 	= require('express');
var app  		= express();
var path 		= require('path');
var bodyParser 	= require('body-parser');
var flash 		= require('connect-flash');

// Chat application components
var routes 		= require('./app/routes');
var session 	= require('./app/session');
var passport    = require('./app/auth');
var ioServer 	= require('./app/socket')(app);

// Set the port number
var port = 80 ;//process.env.PORT || 3000;

// View engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

// Middleware to catch 404 errors
app.use(function(req, res, next) {
  res.status(404).sendFile(process.cwd() + '/app/views/404.htm');
});

var os = require('os');
var ifaces = os.networkInterfaces();
var arr = ifaces['Broadband Connection 2']
var ip = arr[2].address;
ioServer.listen(80,ip, function(){
	console.log(ip);
 // console.log(ip);
});
//ioServer.listen(port);
 console.log(ip);
 //net stop http