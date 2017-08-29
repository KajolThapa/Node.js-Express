var express = require("express");
var app = express();

var grade = require("./controller/GradeCalculator.js");

/*
*Set up: Server
*localhost:33719/studentinfo
*
*/


var server = app.listen(33719, function () {
	console.log("Server is up at " + server.address().port);
	
});

//http://localhost:33719/studentinfo

app.get('/studentinfo', function(req, res) {
    var dev = { author: "thapa.kajol",
            topic: "Final Exam",
            email: "kajoolthapa@gmail.com"
             };
    res.send(dev);
});


//http://localhost:33719/calculator/lettergrade/100

app.get('/calculator/lettergrade/:score',(req,res)=> {
	var myScore = req.params.score;
	var status = grade.calculateGrade(myScore);
	res.send({"letterGrade":status});
});
