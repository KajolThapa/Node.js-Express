var express = require('express');
var app = express();
var os = require("os");
var summaryDAO = require('./dao/SummaryByLocationDAO.js');

app.get('/author', function (req, res) {   
	var  x  = 
		{
			author:"thapa.kajol"
			, topic: "Final Project"
			, email:"kajoolthapa@gmail.com" 
       
		};

	res.send(x);   
});

app.get('/summary', function (req, res) {   
	summaryDAO.summaryByLocation({ "location.code": 1, "shortDate.year": 1},{}, e => {
	res.send(e);
	});  
});



var server = app.listen(33619, function () {
  var host = os.hostname() ;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});