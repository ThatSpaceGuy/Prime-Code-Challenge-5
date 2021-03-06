var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// Set up middleware
app.use(bodyParser.urlencoded( {extended: false } ));
app.use(bodyParser.json());

//routers
var heroRouter = require('../routers/heroRoutes.js');
// use routes -- all routes in this router must start with /
app.use('/hero', heroRouter);

// // :id give you the option to grab an id from the url
// // more info: Google (express routing)
// app.get('/test/:id?', function(req,res){
//   console.log('in test route');
//
//   console.log('req.body =',req.body);
//   console.log('req.query =',req.query);  // localhost:3000/test?q=
//   console.log('req.params =',req.params); // localhost:3000/test/id
//
//   res.send('OK');
// });

// connection string
mongoose.connect('mongodb://localhost:27017/heroTrackerDB');

// spin up server
var port = '4242';
app.listen(port,'localhost',function(){
  console.log('Server is listening on port', 4242);
});

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');

  res.sendFile(path.resolve('public/views/index.html'));
});

// setup 'public' as a static resource
app.use(express.static('public'));
