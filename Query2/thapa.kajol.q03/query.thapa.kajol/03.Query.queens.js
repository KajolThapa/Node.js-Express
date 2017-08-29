/*
    mongo 03.Query.queens.js
    How many students live in queens

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");

var results = db.exams.aggregate(
				[
			 	 { $match: { "county": "queens" } },
				 { $group: { _id: "n/a", count: { $sum: 1 } } }
				]
			);

results.forEach(e => {
    printjson(e);
})

//{ "_id" : "n/a", "count" : 218 }