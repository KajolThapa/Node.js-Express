/*
    mong4 05.Query.bronx.js
    How many students live in bronx

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "county": "bronx" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([m, count]);

results.forEach(e => {
    printjson(e);
})


/*
{ "_id" : "n/a", "count" : 225 }
*/