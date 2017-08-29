/* 
file location: nodeApp/controller
file name: SearchByStudent.js
*/


var MongoClient = require('mongodb').MongoClient;

function searchBy(where, callback){
  
    MongoClient.connect('mongodb://localhost:27017/examsdb', function(err, db) {
       //console.log({error: err});
        console.log('Testing connections');

        var exams = db.collection('exams');
        var matchId = {"$match": {} };
        var matchCounty = {"$match": {} };
        var limit=50; 
        
         if (where.limit) {
         limit = where.limit;
    }

    if (where.studentId) {
      matchId= {"$match":{"studentId": where.studentId } };
    }
    if (where.county) {
      matchId= {"$match":{"county": where.county } };
    }

        exams.aggregate(
            [	
            	matchId,
            	//{ $project: { "_id": 1, "gender": 1, "county":1,  "average": 1,"studentId": 1 } },
         
				      //{ $group:   { "_id": "$customerId","amountSpent": { "$sum": "$totalPrice" }   } },
				 
				      //{ $sort:     {"average":-1}},		
				{ $limit: 50}
			]
		).toArray( (e,d)=> {
        var doc = {
            
            "results": d
        };
            callback(doc);
            db.close();
        });
    });
};


var exports = module.exports =[];
exports.searchStudents = searchBy;

//var criteria = {};