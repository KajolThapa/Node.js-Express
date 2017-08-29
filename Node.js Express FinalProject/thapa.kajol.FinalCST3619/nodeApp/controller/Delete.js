

var MongoClient = require('mongodb').MongoClient;

function deleteRow(data,callback) {
    MongoClient.connect('mongodb://localhost:27017/examsdb', function(err, db) {
        console.log('Testing connections');

        var exams = db.collection('exams');

        exams.remove(data,(error,results)=> {
            callback(results);
            db.close();

        });
        
    });
}

var exports = module.exports = [];
exports.deleteRow = deleteRow;

