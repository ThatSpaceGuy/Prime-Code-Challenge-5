var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//model
var Hero = require('../models/hero.js');

router.get('/all', function(req,res){
  console.log('/all route hit');
    Hero.find({}, function(err, dbResults){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500); // Internal Server error
      } else {
        console.log('/all route returned:', dbResults);
        res.send(dbResults);
      }
    }); // end Hero.find
}); // end /all get route

router.post('/create', function(req, res){
  console.log('hit the /create post with:', req.body);

  var sentData = req.body;

  var newHero = new Hero({
    // alias: String,
    // first_name: String,
    // last_name: String,
    // city: String,
    // power_name: String,
    // created_at: Date
  }); // end var newHero

  newHero.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500); // Internal Server error
    } else {
      console.log('New Hero saved successfully!');
      res.sendStatus(201); // Status created
    }
  }); // end newHero.save
}); // end /create post route

module.exports = router;