/*
    mong4 03.Query.brooklyn.js
    How many students live in brooklyn

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/
var db = db.getSiblingDB("examsdb");

var results = db.exams.aggregate(
				[
			 	 { $match: { "county": "brooklyn" } },
				 { $group: { _id: "n/a", count: { $sum: 1 } } }
				]
			);

results.forEach(e => {
    printjson(e);
})

//{ "_id" : "n/a", "count" : 254 }