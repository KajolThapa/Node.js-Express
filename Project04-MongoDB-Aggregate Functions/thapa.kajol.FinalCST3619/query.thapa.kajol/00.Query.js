/*
    mongo 00.Query.js
    Search data by customer id
    display all fields.

    https://docs.mongodb.com/manual/core/aggregation-pipeline/
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "studentId": "A-29847" } };
var results = db.exams.aggregate([m]);

results.forEach(e => {
    printjson(e);
})