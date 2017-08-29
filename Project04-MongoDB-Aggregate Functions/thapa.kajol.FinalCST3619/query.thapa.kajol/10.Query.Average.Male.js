/*
    mongo 10.Query.Average.Male.js
    Display all the studends where the average
    is greater than or equal 90. Only display male 
    students

    Display all _id, studentId, gender, and average
    sort the data by average in descending order
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "average": {"$gte":90}, "gender": "male" } };
var sort = { $sort : {"average": -1 } };
var projection = {$project: {"_id":1, "studentId":1, "average":1}};
var results = db.exams.aggregate([m,sort,projection]);

results.forEach(e => {
    printjson(e);
})


/*
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.3
loading file: 10.Query.Average.Male.js
{ "_id" : 10398, "average" : 99.2, "studentId" : "F-25909" }
{ "_id" : 10042, "average" : 98.6, "studentId" : "A-84590" }
{ "_id" : 10745, "average" : 98.4, "studentId" : "T-20141" }
{ "_id" : 10749, "average" : 98.4, "studentId" : "T-30486" }
{ "_id" : 10315, "average" : 98, "studentId" : "F-38457" }
{ "_id" : 10638, "average" : 97.4, "studentId" : "T-30005" }
{ "_id" : 10600, "average" : 97.2, "studentId" : "T-19968" }
{ "_id" : 10716, "average" : 97.2, "studentId" : "T-40999" }
{ "_id" : 10400, "average" : 97, "studentId" : "F-36289" }
{ "_id" : 10327, "average" : 96.6, "studentId" : "F-14644" }
{ "_id" : 10514, "average" : 96.6, "studentId" : "T-41980" }
{ "_id" : 10050, "average" : 96.4, "studentId" : "A-93921" }
{ "_id" : 10777, "average" : 96.4, "studentId" : "T-25326" }
{ "_id" : 10521, "average" : 96, "studentId" : "T-24606" }
{ "_id" : 10027, "average" : 95.6, "studentId" : "A-53851" }
{ "_id" : 10376, "average" : 95.6, "studentId" : "F-34446" }
{ "_id" : 10752, "average" : 95.6, "studentId" : "T-16939" }
{ "_id" : 10792, "average" : 95.6, "studentId" : "T-31186" }
{ "_id" : 10502, "average" : 95, "studentId" : "T-28331" }
{ "_id" : 10649, "average" : 94.8, "studentId" : "T-34746" }
{ "_id" : 10813, "average" : 94.8, "studentId" : "T-22675" }
{ "_id" : 10007, "average" : 94.6, "studentId" : "A-19144" }
{ "_id" : 10520, "average" : 94.4, "studentId" : "T-30022" }
{ "_id" : 10599, "average" : 94.4, "studentId" : "T-30957" }
{ "_id" : 10687, "average" : 94.4, "studentId" : "T-23294" }
{ "_id" : 10296, "average" : 94.2, "studentId" : "B-75991" }
{ "_id" : 10534, "average" : 94.2, "studentId" : "T-41084" }
{ "_id" : 10753, "average" : 94.2, "studentId" : "T-38342" }
{ "_id" : 10068, "average" : 94, "studentId" : "B-82084" }
{ "_id" : 10314, "average" : 94, "studentId" : "F-36313" }
{ "_id" : 10603, "average" : 94, "studentId" : "T-37972" }
{ "_id" : 10801, "average" : 94, "studentId" : "T-24097" }
{ "_id" : 10542, "average" : 93.8, "studentId" : "T-12641" }
{ "_id" : 10568, "average" : 93.8, "studentId" : "T-25237" }
{ "_id" : 10747, "average" : 93.8, "studentId" : "T-37367" }
{ "_id" : 10332, "average" : 93.6, "studentId" : "F-35016" }
{ "_id" : 10556, "average" : 93.6, "studentId" : "T-29578" }
{ "_id" : 10593, "average" : 93.4, "studentId" : "T-18142" }
{ "_id" : 10755, "average" : 93.4, "studentId" : "T-27433" }
{ "_id" : 10051, "average" : 93.2, "studentId" : "A-96229" }
{ "_id" : 10351, "average" : 93.2, "studentId" : "F-23593" }
{ "_id" : 10390, "average" : 93.2, "studentId" : "F-19660" }
{ "_id" : 10448, "average" : 93.2, "studentId" : "X-20166" }
{ "_id" : 10794, "average" : 93.2, "studentId" : "T-40888" }
{ "_id" : 10382, "average" : 93, "studentId" : "F-12616" }
{ "_id" : 10313, "average" : 92.8, "studentId" : "F-27139" }
{ "_id" : 10407, "average" : 92.8, "studentId" : "G-25183" }
{ "_id" : 10575, "average" : 92.8, "studentId" : "T-21763" }
{ "_id" : 10633, "average" : 92.8, "studentId" : "T-13971" }
{ "_id" : 10711, "average" : 92.8, "studentId" : "T-19916" }
{ "_id" : 10422, "average" : 92.6, "studentId" : "G-17336" }
{ "_id" : 10507, "average" : 92.4, "studentId" : "T-26973" }
{ "_id" : 10654, "average" : 92.4, "studentId" : "T-32351" }
{ "_id" : 10331, "average" : 92.2, "studentId" : "F-39122" }
{ "_id" : 10586, "average" : 92.2, "studentId" : "T-14652" }
{ "_id" : 10588, "average" : 92.2, "studentId" : "T-33452" }
{ "_id" : 10780, "average" : 92, "studentId" : "T-14927" }
{ "_id" : 10055, "average" : 91.8, "studentId" : "B-80869" }
{ "_id" : 10499, "average" : 91.8, "studentId" : "T-31616" }
{ "_id" : 10698, "average" : 91.8, "studentId" : "T-40482" }
{ "_id" : 10819, "average" : 91.8, "studentId" : "T-19308" }
{ "_id" : 10420, "average" : 91.6, "studentId" : "G-33450" }
{ "_id" : 10427, "average" : 91.6, "studentId" : "G-16609" }
{ "_id" : 10436, "average" : 91.6, "studentId" : "G-25195" }
{ "_id" : 10668, "average" : 91.6, "studentId" : "T-32375" }
{ "_id" : 10301, "average" : 91.4, "studentId" : "B-89713" }
{ "_id" : 10632, "average" : 91.4, "studentId" : "T-20176" }
{ "_id" : 10251, "average" : 91.2, "studentId" : "B-84666" }
{ "_id" : 10431, "average" : 91.2, "studentId" : "G-19573" }
{ "_id" : 10561, "average" : 91.2, "studentId" : "T-17572" }
{ "_id" : 10635, "average" : 91.2, "studentId" : "T-33089" }
{ "_id" : 10165, "average" : 91, "studentId" : "B-81027" }
{ "_id" : 10193, "average" : 91, "studentId" : "B-84041" }
{ "_id" : 10250, "average" : 91, "studentId" : "B-83583" }
{ "_id" : 10392, "average" : 91, "studentId" : "F-33366" }
{ "_id" : 10393, "average" : 91, "studentId" : "F-39615" }
{ "_id" : 10445, "average" : 91, "studentId" : "X-39100" }
{ "_id" : 10483, "average" : 90.8, "studentId" : "X-19238" }
{ "_id" : 10704, "average" : 90.8, "studentId" : "T-14513" }
{ "_id" : 10759, "average" : 90.8, "studentId" : "T-17570" }
{ "_id" : 10224, "average" : 90.6, "studentId" : "B-78519" }
{ "_id" : 10231, "average" : 90.6, "studentId" : "B-82687" }
{ "_id" : 10323, "average" : 90.6, "studentId" : "F-18281" }
{ "_id" : 10528, "average" : 90.6, "studentId" : "T-40782" }
{ "_id" : 10695, "average" : 90.6, "studentId" : "T-16801" }
{ "_id" : 10782, "average" : 90.6, "studentId" : "T-30381" }
{ "_id" : 10815, "average" : 90.6, "studentId" : "T-40045" }
{ "_id" : 10079, "average" : 90.4, "studentId" : "B-76031" }
{ "_id" : 10097, "average" : 90.4, "studentId" : "B-76783" }
{ "_id" : 10261, "average" : 90.4, "studentId" : "B-86643" }
{ "_id" : 10330, "average" : 90.4, "studentId" : "F-40180" }
{ "_id" : 10346, "average" : 90.4, "studentId" : "F-25354" }
{ "_id" : 10703, "average" : 90.4, "studentId" : "T-41188" }
{ "_id" : 10368, "average" : 90.2, "studentId" : "F-16334" }
{ "_id" : 10434, "average" : 90.2, "studentId" : "G-39055" }
{ "_id" : 10435, "average" : 90.2, "studentId" : "G-32846" }
{ "_id" : 10584, "average" : 90.2, "studentId" : "T-29784" }
{ "_id" : 10789, "average" : 90.2, "studentId" : "T-25142" }
{ "_id" : 10058, "average" : 90, "studentId" : "B-89554" }
{ "_id" : 10123, "average" : 90, "studentId" : "B-77490" }
{ "_id" : 10754, "average" : 90, "studentId" : "T-22306" }
*/