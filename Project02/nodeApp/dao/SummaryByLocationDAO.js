/* 
    file name: 01.SummaryByLocation.js 
    https://docs.mongodb.com/manual/reference/method/db.collection.group/
    To display how much money that was made  based on location.  
    Display location code and the amount of money made
    node SummaryByLocation.js


var db = db.getSisterDB("purchasedb");

var result = db.purchases.group({
    key: { "location.code": 1 },
    reduce: function(curr, result) {
        result.total = result.total + curr.totalPrice;
    },
    initial: { total: 0 }
});

printjson(result);

*/
var MongoClient = require('mongodb').MongoClient;
function getLocationSummary(cb){
var url = 'mongodb://localhost:27017/purchasedb';
MongoClient.connect(url, function(err, db) {
    var purchases = db.collection("purchases");
    var keys = { "location.code": 1 }, 
    condition = {}, 
    initial = {total:0},
    reduce = function(curr, result) {
        result.total = result.total + curr.totalPrice;
    },
    callback = function(error, results){
       cb(results);
    };
    
  purchases.group(keys, condition, initial, reduce, callback);
  db.close();
});
}
var exports = module.exports = [];
exports.summaryByLocation = getLocationSummary;
