//FileName: GradeCalculator.js

var MongoClient = require('mongodb').MongoClient; 

function searchBy(where, callback){
  
    MongoClient.connect('mongodb://localhost:27017/examsdb', function(err, db) {
        console.log({error: err});

      
        var exams = db.collection('exams');
        var matchId = {"$match": {} };
        var matchCounty = {"$match": {} };
        var matchAverage = {"$match": {} };
        var matchDate = {"$match": {} };
        var limit = 50; 
        
    if (where.limit) {
        limit = where.limit;
    }

    if (where.id) {
      matchId= {"$match":{"studentId": where.id } };
    }
    if (where.county) {
      matchId= {"$match":{"county": where.county } };
    }

    if (where.county) {
      matchId= {"$match":{"county": where.county } };
    }

        exams.aggregate(
            [   
                matchId,       
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



var exports = module.exports = [];
exports.by = searchBy;
