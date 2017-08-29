/*
    mongo 10.Query.Average.Male.js
    Display all the studends where the average
    is greater than or equal 90. Only display male 
    students

    Display all _id, studentId, gender, and average
    sort the data by average in descending order

*/
var db = db.getSiblingDB("examsdb");
var criteria ={ $match: {"average":{"$gte":90},"gender":"male" } };
var sort = { $sort: {"average":-1} };
var projection = { $project: {"_id":1, "studentId":1, "gender":1, "average":1} };

var results = db.exams.aggregate([criteria, sort, projection]);

results.forEach(e => {
	printjson(e);

	}) 

/*
	{
        "_id" : 10398,
        "gender" : "male",
        "average" : 99.2,
        "studentId" : "F-25909"
}
{
        "_id" : 10042,
        "gender" : "male",
        "average" : 98.6,
        "studentId" : "A-84590"
}
{
        "_id" : 10745,
        "gender" : "male",
        "average" : 98.4,
        "studentId" : "T-20141"
}
{
        "_id" : 10749,
        "gender" : "male",
        "average" : 98.4,
        "studentId" : "T-30486"
}
{
        "_id" : 10315,
        "gender" : "male",
        "average" : 98,
        "studentId" : "F-38457"
}
{
        "_id" : 10638,
        "gender" : "male",
        "average" : 97.4,
        "studentId" : "T-30005"
}
{
        "_id" : 10600,
        "gender" : "male",
        "average" : 97.2,
        "studentId" : "T-19968"
}
{
        "_id" : 10716,
        "gender" : "male",
        "average" : 97.2,
        "studentId" : "T-40999"
}
{
        "_id" : 10400,
        "gender" : "male",
        "average" : 97,
        "studentId" : "F-36289"
}
{
        "_id" : 10327,
        "gender" : "male",
        "average" : 96.6,
        "studentId" : "F-14644"
}
{
        "_id" : 10514,
        "gender" : "male",
        "average" : 96.6,
        "studentId" : "T-41980"
}
{
        "_id" : 10050,
        "gender" : "male",
        "average" : 96.4,
        "studentId" : "A-93921"
}
{
        "_id" : 10777,
        "gender" : "male",
        "average" : 96.4,
        "studentId" : "T-25326"
}
{
        "_id" : 10521,
        "gender" : "male",
        "average" : 96,
        "studentId" : "T-24606"
}
{
        "_id" : 10027,
        "gender" : "male",
        "average" : 95.6,
        "studentId" : "A-53851"
}
{
        "_id" : 10376,
        "gender" : "male",
        "average" : 95.6,
        "studentId" : "F-34446"
}
{
        "_id" : 10752,
        "gender" : "male",
        "average" : 95.6,
        "studentId" : "T-16939"
}
{
        "_id" : 10792,
        "gender" : "male",
        "average" : 95.6,
        "studentId" : "T-31186"
}
{
        "_id" : 10502,
        "gender" : "male",
        "average" : 95,
        "studentId" : "T-28331"
}
{
        "_id" : 10649,
        "gender" : "male",
        "average" : 94.8,
        "studentId" : "T-34746"
}
{
        "_id" : 10813,
        "gender" : "male",
        "average" : 94.8,
        "studentId" : "T-22675"
}
{
        "_id" : 10007,
        "gender" : "male",
        "average" : 94.6,
        "studentId" : "A-19144"
}
{
        "_id" : 10520,
        "gender" : "male",
        "average" : 94.4,
        "studentId" : "T-30022"
}
{
        "_id" : 10599,
        "gender" : "male",
        "average" : 94.4,
        "studentId" : "T-30957"
}
{
        "_id" : 10687,
        "gender" : "male",
        "average" : 94.4,
        "studentId" : "T-23294"
}
{
        "_id" : 10296,
        "gender" : "male",
        "average" : 94.2,
        "studentId" : "B-75991"
}
{
        "_id" : 10534,
        "gender" : "male",
        "average" : 94.2,
        "studentId" : "T-41084"
}
{
        "_id" : 10753,
        "gender" : "male",
        "average" : 94.2,
        "studentId" : "T-38342"
}
{
        "_id" : 10068,
        "gender" : "male",
        "average" : 94,
        "studentId" : "B-82084"
}
{
        "_id" : 10314,
        "gender" : "male",
        "average" : 94,
        "studentId" : "F-36313"
}
{
        "_id" : 10603,
        "gender" : "male",
        "average" : 94,
        "studentId" : "T-37972"
}
{
        "_id" : 10801,
        "gender" : "male",
        "average" : 94,
        "studentId" : "T-24097"
}
{
        "_id" : 10542,
        "gender" : "male",
        "average" : 93.8,
        "studentId" : "T-12641"
}
{
        "_id" : 10568,
        "gender" : "male",
        "average" : 93.8,
        "studentId" : "T-25237"
}
{
        "_id" : 10747,
        "gender" : "male",
        "average" : 93.8,
        "studentId" : "T-37367"
}
{
        "_id" : 10332,
        "gender" : "male",
        "average" : 93.6,
        "studentId" : "F-35016"
}
{
        "_id" : 10556,
        "gender" : "male",
        "average" : 93.6,
        "studentId" : "T-29578"
}
{
        "_id" : 10593,
        "gender" : "male",
        "average" : 93.4,
        "studentId" : "T-18142"
}
{
        "_id" : 10755,
        "gender" : "male",
        "average" : 93.4,
        "studentId" : "T-27433"
}
{
        "_id" : 10051,
        "gender" : "male",
        "average" : 93.2,
        "studentId" : "A-96229"
}
{
        "_id" : 10351,
        "gender" : "male",
        "average" : 93.2,
        "studentId" : "F-23593"
}
{
        "_id" : 10390,
        "gender" : "male",
        "average" : 93.2,
        "studentId" : "F-19660"
}
{
        "_id" : 10448,
        "gender" : "male",
        "average" : 93.2,
        "studentId" : "X-20166"
}
{
        "_id" : 10794,
        "gender" : "male",
        "average" : 93.2,
        "studentId" : "T-40888"
}
{
        "_id" : 10382,
        "gender" : "male",
        "average" : 93,
        "studentId" : "F-12616"
}
{
        "_id" : 10313,
        "gender" : "male",
        "average" : 92.8,
        "studentId" : "F-27139"
}
{
        "_id" : 10407,
        "gender" : "male",
        "average" : 92.8,
        "studentId" : "G-25183"
}
{
        "_id" : 10575,
        "gender" : "male",
        "average" : 92.8,
        "studentId" : "T-21763"
}
{
        "_id" : 10633,
        "gender" : "male",
        "average" : 92.8,
        "studentId" : "T-13971"
}
{
        "_id" : 10711,
        "gender" : "male",
        "average" : 92.8,
        "studentId" : "T-19916"
}
{
        "_id" : 10422,
        "gender" : "male",
        "average" : 92.6,
        "studentId" : "G-17336"
}
{
        "_id" : 10507,
        "gender" : "male",
        "average" : 92.4,
        "studentId" : "T-26973"
}
{
        "_id" : 10654,
        "gender" : "male",
        "average" : 92.4,
        "studentId" : "T-32351"
}
{
        "_id" : 10331,
        "gender" : "male",
        "average" : 92.2,
        "studentId" : "F-39122"
}
{
        "_id" : 10586,
        "gender" : "male",
        "average" : 92.2,
        "studentId" : "T-14652"
}
{
        "_id" : 10588,
        "gender" : "male",
        "average" : 92.2,
        "studentId" : "T-33452"
}
{
        "_id" : 10780,
        "gender" : "male",
        "average" : 92,
        "studentId" : "T-14927"
}
{
        "_id" : 10055,
        "gender" : "male",
        "average" : 91.8,
        "studentId" : "B-80869"
}
{
        "_id" : 10499,
        "gender" : "male",
        "average" : 91.8,
        "studentId" : "T-31616"
}
{
        "_id" : 10698,
        "gender" : "male",
        "average" : 91.8,
        "studentId" : "T-40482"
}
{
        "_id" : 10819,
        "gender" : "male",
        "average" : 91.8,
        "studentId" : "T-19308"
}
{
        "_id" : 10420,
        "gender" : "male",
        "average" : 91.6,
        "studentId" : "G-33450"
}
{
        "_id" : 10427,
        "gender" : "male",
        "average" : 91.6,
        "studentId" : "G-16609"
}
{
        "_id" : 10436,
        "gender" : "male",
        "average" : 91.6,
        "studentId" : "G-25195"
}
{
        "_id" : 10668,
        "gender" : "male",
        "average" : 91.6,
        "studentId" : "T-32375"
}
{
        "_id" : 10301,
        "gender" : "male",
        "average" : 91.4,
        "studentId" : "B-89713"
}
{
        "_id" : 10632,
        "gender" : "male",
        "average" : 91.4,
        "studentId" : "T-20176"
}
{
        "_id" : 10251,
        "gender" : "male",
        "average" : 91.2,
        "studentId" : "B-84666"
}
{
        "_id" : 10431,
        "gender" : "male",
        "average" : 91.2,
        "studentId" : "G-19573"
}
{
        "_id" : 10561,
        "gender" : "male",
        "average" : 91.2,
        "studentId" : "T-17572"
}
{
        "_id" : 10635,
        "gender" : "male",
        "average" : 91.2,
        "studentId" : "T-33089"
}
{
        "_id" : 10165,
        "gender" : "male",
        "average" : 91,
        "studentId" : "B-81027"
}
{
        "_id" : 10193,
        "gender" : "male",
        "average" : 91,
        "studentId" : "B-84041"
}
{
        "_id" : 10250,
        "gender" : "male",
        "average" : 91,
        "studentId" : "B-83583"
}
{
        "_id" : 10392,
        "gender" : "male",
        "average" : 91,
        "studentId" : "F-33366"
}
{
        "_id" : 10393,
        "gender" : "male",
        "average" : 91,
        "studentId" : "F-39615"
}
{
        "_id" : 10445,
        "gender" : "male",
        "average" : 91,
        "studentId" : "X-39100"
}
{
        "_id" : 10483,
        "gender" : "male",
        "average" : 90.8,
        "studentId" : "X-19238"
}
{
        "_id" : 10704,
        "gender" : "male",
        "average" : 90.8,
        "studentId" : "T-14513"
}
{
        "_id" : 10759,
        "gender" : "male",
        "average" : 90.8,
        "studentId" : "T-17570"
}
{
        "_id" : 10224,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "B-78519"
}
{
        "_id" : 10231,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "B-82687"
}
{
        "_id" : 10323,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "F-18281"
}
{
        "_id" : 10528,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "T-40782"
}
{
        "_id" : 10695,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "T-16801"
}
{
        "_id" : 10782,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "T-30381"
}
{
        "_id" : 10815,
        "gender" : "male",
        "average" : 90.6,
        "studentId" : "T-40045"
}
{
        "_id" : 10079,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "B-76031"
}
{
        "_id" : 10097,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "B-76783"
}
{
        "_id" : 10261,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "B-86643"
}
{
        "_id" : 10330,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "F-40180"
}
{
        "_id" : 10346,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "F-25354"
}
{
        "_id" : 10703,
        "gender" : "male",
        "average" : 90.4,
        "studentId" : "T-41188"
}
{
        "_id" : 10368,
        "gender" : "male",
        "average" : 90.2,
        "studentId" : "F-16334"
}
{
        "_id" : 10434,
        "gender" : "male",
        "average" : 90.2,
        "studentId" : "G-39055"
}
{
        "_id" : 10435,
        "gender" : "male",
        "average" : 90.2,
        "studentId" : "G-32846"
}
{
        "_id" : 10584,
        "gender" : "male",
        "average" : 90.2,
        "studentId" : "T-29784"
}
{
        "_id" : 10789,
        "gender" : "male",
        "average" : 90.2,
        "studentId" : "T-25142"
}
{
        "_id" : 10058,
        "gender" : "male",
        "average" : 90,
        "studentId" : "B-89554"
}
{
        "_id" : 10123,
        "gender" : "male",
        "average" : 90,
        "studentId" : "B-77490"
}
{
        "_id" : 10754,
        "gender" : "male",
        "average" : 90,
        "studentId" : "T-22306"
}
 */