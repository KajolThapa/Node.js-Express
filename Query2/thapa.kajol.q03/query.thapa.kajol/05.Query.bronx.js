/*
    mong4 05.Query.bronx.js
    How many students live in bronx

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
*/

var db = db.getSiblingDB("examsdb");

var results = db.exams.aggregate(
				[
			 	 { $match: { "county": "bronx" } },
				 { $group: { _id: "n/a", count: { $sum: 1 } } }
				]
			);

results.forEach(e => {
    printjson(e);
})

//{ "_id" : "n/a", "count" : 225 }