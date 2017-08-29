/*
    mongo 00.Query.js
    How many students live in westchester 

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "customerId": "A-29847" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([count]);

results.forEach(e => {
    printjson(e);
})