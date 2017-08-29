
var express = require('express');
var app = express();
var app = express.Router();
var logger = require('morgan');
var os = require("os");

var topCtrl = require('../controller/SearchByStudentId.js');
app.use(logger('dev'));

app.get('/', function(req, res){

})

//http://localhost:33719/searchby/studentid/A-13878
app.get('/searchby/studentid/:studentid', function(req,res) {
  var studentId = req.params.studentid;
  topCtrl.searchStudents({studentId}, event => {
  res.send(event.results);
  });
});

app.get('/searchby/county/:county', function(req,res) {
  var county = req.params.county;
  topCtrl.searchStudents({county}, event => {
  res.send(event.results);
  });
});



// expose this module to the outside world
module.exports  = app;


