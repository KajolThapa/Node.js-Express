/*
    mongo 02.Query.west.js
    How many students live in westchester 

    all the counties: [ "westchester", "queens", "bronx", "longisland", "brooklyn" ]

    https://docs.mongodb.com/manual/reference/operator/aggregation/sum/

    
*/
/*
	var m = { $match: { "county": "westchester" } };
	var count = { $group: { _id: "n/a", count: { $sum: 1 } } };

	var results = db.exams.aggregate([m, count]);

 */


var db = db.getSiblingDB("examsdb");

var results = db.exams.aggregate(
				[
			 	 { $match: { "county": "westchester" } },
				 { $group: { _id: "n/a", count: { $sum: 1 } } }
				]
			);

results.forEach(e => {
    printjson(e);
})

//{ "_id" : "n/a", "count" : 70 }
