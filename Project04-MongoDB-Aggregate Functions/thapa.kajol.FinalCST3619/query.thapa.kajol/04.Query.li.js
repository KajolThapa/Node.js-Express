/*
    mong4 03.Query.li.js
    How many students live in longisland

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "county": "longisland" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([m, count]);

results.forEach(e => {
    printjson(e);
})

/*
{ "_id" : "n/a", "count" : 57 }
*/