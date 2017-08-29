var express = require("express");
var app = express();
var logger = require('morgan');
var os = require("os");

 var studentRoutes = require("./routes/searchBy-studentId-routes");
 var gradeRoutes = require("./routes/calculate-grade-routes");

app.use(logger('dev'));

app.use("/", studentRoutes);
app.use("/", gradeRoutes);



app.get('/studentinfo', function(req, res) {
    var dev = { author: "thapa.kajol",
            topic: "Final Exam",
            email: "kajoolthapa@gmail.com"
             };
    res.send(dev);
});


var server = app.listen(33719, function() {
    var hostname = os.hostname();
    var port = server.address().port;
    console.log("[CST3619] Server Information: http://%s:%s", hostname, port);
});