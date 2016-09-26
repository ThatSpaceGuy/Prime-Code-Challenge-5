var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//model
var Item = require('../models/dbItem.js');

router.get('/all', function(req,res){
  console.log('/all route hit');
    Item.find({}, function(err, dbResults){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500); // Internal Server error
      } else {
        console.log('/all route returned:', dbResults);
        res.send(dbResults);
      }
    });
});

router.post('/create', function(req, res){
  console.log('hit the /create post with:', req.body);

  var sentData = req.body;

  var newItem = new Item({
    name: sentData.name,
    property2: sentData.property2,
    property3: sentData.propery3
  });

  newItem.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500); // Internal Server error
    } else {
      console.log('New Item saved successfully!');
      res.sendStatus(201); // Status created
    }
  });
  res.sendStatus(200);
});

module.exports = router;
