/*
    mongo 03.Query.js
    How many students live in queens

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "county": "queens" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([m, count]);

results.forEach(e => {
    printjson(e);
})

/*
{ "_id" : "n/a", "count" : 218 }
*/