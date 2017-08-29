/*
    mongo 02.Query.west.js
    How many students live in westchester 

    all the counties: [ "westchester", "queens", "bronx", "longisland", "brooklyn" ]

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/

    
*/
var db = db.getSiblingDB("examsdb");
var m = { $match: { "county": "westchester" } };
var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

var results = db.exams.aggregate([m, count]);

results.forEach(e => {
    printjson(e);
})

/*
{ "_id" : "n/a", "count" : 70 }
*/