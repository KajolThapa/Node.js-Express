/*
    mong4 03.Query.brooklyn.js
    How many students live in brooklyn

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "county": "brooklyn" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([m, count]);

results.forEach(e => {
    printjson(e);
})

/*
{ "_id" : "n/a", "count" : 254 }
*/