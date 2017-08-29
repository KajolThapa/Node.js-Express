var express = require('express');
var app = express();
var logger = require('morgan');
var os = require("os");


app.use(logger('dev'));
//app.use("/summary", summaryRoutes );

//app.use("/topCustomers", topRoutes );

app.get('/studentinfo', function(req, res) {
    var x = {
			"author": "thapa.kajol",
			"topic": "Final Exam",
			"email": "kajoolthapa@gmail.com"
	};
    res.send(x);
});

app.get('/calculator/lettergrade/:avg', function(req,res) {
	var calculator = require("./controller/GradeCalculator");
	var inputvalue= parseInt(req.params.avg);
	var lettergrade = calculator.getGrade(inputvalue);
	res.send({
				"letterGrade": lettergrade
	});
});

app.get('/searchBy/studentId/:id', function(req,res) {
	var search = require("./controller/Search");
	var id = req.params.id;
	var limit = 1;
	search.by({id, limit}, r => {
		res.send(r.results);
	});
});


//localhost:33719/calculate/studentid/A-13878
app.get('/calculate/studentid/:id', function(req,res) {
	var calculator = require("./controller/GradeCalculator");
	var search = require("./controller/Search");
	var id = req.params.id;
	var limit = 1;
	var result = {};

	search.by({id, limit}, r => {
		if(r.results[0])
		{
			result = r.results[0];
			var lg = calculator.getGrade(result.average);
		    var eg = calculator.getRemark(result.average);
			result.grade = {lg, eg};

		}
		res.send(result);
	});
});



app.delete('/delete/studentId/:id', function(req,res) {
	var search = require("./controller/Search");
	var del = require("./controller/Delete");
	var studentId = req.params.id;
	var id = studentId;
	var limit = 1;

	search.by({id, limit}, r1 => {
		del.deleteRow({studentId}, r2 => {
		res.send(r1.results);
	});
	});
	
});

// http://localhost:33719/year/1980 
app.get('/year/:year', function(req,res) {
	var calculator = require("./controller/GradeCalculator");
	var year = parseInt(req.params.year);
	var age = calculator.getAge(year);
	res.send({
				"age": age
	});
});

 //localhost:33719/elementry/100
app.get('/elementry/:input', function(req,res) {
	var calculator = require("./controller/GradeCalculator");
	var inputvalue = parseInt(req.params.input);
	var lettergrade= calculator.getRemark(inputvalue);
	res.send({
				"inputvalue":inputvalue,
				"schoolgrade":lettergrade
	});
});

//localhost:33719/midtermeval/100
app.get('/midtermeval/:input', function(req,res) {
	var calculator = require("./controller/GradeCalculator");
	var inputvalue = parseInt(req.params.input);
	var passing = calculator.getMidterm(inputvalue);
	res.send({
				"passing":passing
	});
});



var server = app.listen(33719, function() {
    var hostname = os.hostname();
    var port = server.address().port;
    console.log("[CST3619] Server Information: http://%s:%s", hostname, port);
});