var express = require('express');
var app = express();
var app = express.Router();
var logger = require('morgan');
var os = require("os");

var topCtrl = require('../controller/GradeCalculator.js');

//http://localhost:33719/calculator/lettergrade/100
app.get('/calculator/lettergrade/:average', function(req, res) {
  
  var average = parseInt(req.params.average);
  topCtrl.grade(average, event => {
  res.send(event);
  });
});

// expose this module to the outside world
module.exports  = app;