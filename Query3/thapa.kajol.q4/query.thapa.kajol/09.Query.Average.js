/*
    mongo 09.Query.Average.js
    Display all the students where the average
    is greater than or equal 90

    Display all _id, studentId, and average
    sort the data by gender, and  average in descending order
*/
var db = db.getSiblingDB("examsdb");
var criteria = { $match: { "average": {"$gte":90} } };
var sort = { $sort: {"gender":-1, "average":-1 } };
var projection = { $project: {"_id":1, "studentId":1, "average":1 } };


var results = db.exams.aggregate( [criteria, sort, projection] );

results.forEach(e => {
    printjson(e);
})

/*

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
{ "_id" : 10271, "average" : 99.2, "studentId" : "B-87623" }
{ "_id" : 10482, "average" : 98.4, "studentId" : "X-18019" }
{ "_id" : 10430, "average" : 98.2, "studentId" : "G-32036" }
{ "_id" : 10336, "average" : 98, "studentId" : "F-13613" }
{ "_id" : 10527, "average" : 98, "studentId" : "T-15508" }
{ "_id" : 10769, "average" : 98, "studentId" : "T-14649" }
{ "_id" : 10353, "average" : 97.8, "studentId" : "F-35679" }
{ "_id" : 10643, "average" : 97.8, "studentId" : "T-33581" }
{ "_id" : 10036, "average" : 97.4, "studentId" : "A-70197" }
{ "_id" : 10786, "average" : 97.4, "studentId" : "T-24124" }
{ "_id" : 10513, "average" : 97.2, "studentId" : "T-20469" }
{ "_id" : 10800, "average" : 97.2, "studentId" : "T-21634" }
{ "_id" : 10541, "average" : 97, "studentId" : "T-19526" }
{ "_id" : 10583, "average" : 97, "studentId" : "T-21130" }
{ "_id" : 10378, "average" : 96.4, "studentId" : "F-24768" }
{ "_id" : 10469, "average" : 96.4, "studentId" : "X-16291" }
{ "_id" : 10496, "average" : 96.4, "studentId" : "X-28087" }
{ "_id" : 10726, "average" : 96.4, "studentId" : "T-25331" }
{ "_id" : 10809, "average" : 96.4, "studentId" : "T-28095" }
{ "_id" : 10429, "average" : 96.2, "studentId" : "G-27942" }
{ "_id" : 10651, "average" : 96.2, "studentId" : "T-39812" }
{ "_id" : 10790, "average" : 96.2, "studentId" : "T-12778" }
{ "_id" : 10795, "average" : 96.2, "studentId" : "T-39428" }
{ "_id" : 10406, "average" : 96, "studentId" : "G-25160" }
{ "_id" : 10409, "average" : 96, "studentId" : "G-18115" }
{ "_id" : 10623, "average" : 95.8, "studentId" : "T-28511" }
{ "_id" : 10804, "average" : 95.8, "studentId" : "T-38864" }
{ "_id" : 10624, "average" : 95.6, "studentId" : "T-21744" }
{ "_id" : 10371, "average" : 95.4, "studentId" : "F-23156" }
{ "_id" : 10524, "average" : 95.4, "studentId" : "T-40551" }
{ "_id" : 10545, "average" : 95.4, "studentId" : "T-26410" }
{ "_id" : 10559, "average" : 95.4, "studentId" : "T-13120" }
{ "_id" : 10664, "average" : 95.4, "studentId" : "T-32010" }
{ "_id" : 10742, "average" : 95.4, "studentId" : "T-31103" }
{ "_id" : 10796, "average" : 95.4, "studentId" : "T-23679" }
{ "_id" : 10363, "average" : 95.2, "studentId" : "F-34083" }
{ "_id" : 10421, "average" : 95.2, "studentId" : "G-25182" }
{ "_id" : 10473, "average" : 95, "studentId" : "X-27390" }
{ "_id" : 10477, "average" : 95, "studentId" : "X-27536" }
{ "_id" : 10500, "average" : 95, "studentId" : "T-17458" }
{ "_id" : 10569, "average" : 95, "studentId" : "T-37638" }
{ "_id" : 10657, "average" : 95, "studentId" : "T-29886" }
{ "_id" : 10013, "average" : 94.8, "studentId" : "A-28570" }
{ "_id" : 10697, "average" : 94.8, "studentId" : "T-22818" }
{ "_id" : 10762, "average" : 94.8, "studentId" : "T-36983" }
{ "_id" : 10318, "average" : 94.6, "studentId" : "F-35815" }
{ "_id" : 10403, "average" : 94.6, "studentId" : "G-12552" }
{ "_id" : 10511, "average" : 94.6, "studentId" : "T-15973" }
{ "_id" : 10549, "average" : 94.6, "studentId" : "T-40956" }
{ "_id" : 10566, "average" : 94.6, "studentId" : "T-36271" }
{ "_id" : 10646, "average" : 94.6, "studentId" : "T-19935" }
{ "_id" : 10415, "average" : 94.4, "studentId" : "G-16155" }
{ "_id" : 10594, "average" : 94.4, "studentId" : "T-36256" }
{ "_id" : 10688, "average" : 94.4, "studentId" : "T-32757" }
{ "_id" : 10823, "average" : 94.4, "studentId" : "T-12647" }
{ "_id" : 10384, "average" : 94, "studentId" : "F-36085" }
{ "_id" : 10676, "average" : 94, "studentId" : "T-27569" }
{ "_id" : 10721, "average" : 94, "studentId" : "T-24078" }
{ "_id" : 10807, "average" : 94, "studentId" : "T-33160" }
{ "_id" : 10663, "average" : 93.8, "studentId" : "T-13673" }
{ "_id" : 10464, "average" : 93.6, "studentId" : "X-29084" }
{ "_id" : 10543, "average" : 93.6, "studentId" : "T-41683" }
{ "_id" : 10565, "average" : 93.6, "studentId" : "T-26480" }
{ "_id" : 10694, "average" : 93.6, "studentId" : "T-29843" }
{ "_id" : 10317, "average" : 93.4, "studentId" : "F-33710" }
{ "_id" : 10653, "average" : 93.4, "studentId" : "T-33714" }
{ "_id" : 10678, "average" : 93.4, "studentId" : "T-12380" }
{ "_id" : 10701, "average" : 93.4, "studentId" : "T-17254" }
{ "_id" : 10725, "average" : 93.4, "studentId" : "T-41567" }
{ "_id" : 10730, "average" : 93.4, "studentId" : "T-38789" }
{ "_id" : 10003, "average" : 93.2, "studentId" : "A-13878" }
{ "_id" : 10039, "average" : 93.2, "studentId" : "A-77426" }
{ "_id" : 10450, "average" : 93.2, "studentId" : "X-26542" }
{ "_id" : 10459, "average" : 93.2, "studentId" : "X-38347" }
{ "_id" : 10501, "average" : 93.2, "studentId" : "T-22267" }
{ "_id" : 10572, "average" : 93.2, "studentId" : "T-40680" }
{ "_id" : 10650, "average" : 93.2, "studentId" : "T-32772" }
{ "_id" : 10690, "average" : 93.2, "studentId" : "T-34532" }
{ "_id" : 10178, "average" : 93, "studentId" : "B-83457" }
{ "_id" : 10194, "average" : 93, "studentId" : "B-86242" }
{ "_id" : 10344, "average" : 93, "studentId" : "F-41569" }
{ "_id" : 10373, "average" : 93, "studentId" : "F-36362" }
{ "_id" : 10433, "average" : 93, "studentId" : "G-24843" }
{ "_id" : 10490, "average" : 93, "studentId" : "X-12138" }
{ "_id" : 10748, "average" : 93, "studentId" : "T-35962" }
{ "_id" : 10784, "average" : 93, "studentId" : "T-24216" }
{ "_id" : 10814, "average" : 93, "studentId" : "T-37446" }
{ "_id" : 10153, "average" : 92.8, "studentId" : "B-71495" }
{ "_id" : 10370, "average" : 92.8, "studentId" : "F-25293" }
{ "_id" : 10374, "average" : 92.8, "studentId" : "F-17362" }
{ "_id" : 10476, "average" : 92.8, "studentId" : "X-36124" }
{ "_id" : 10722, "average" : 92.8, "studentId" : "T-41264" }
{ "_id" : 10810, "average" : 92.8, "studentId" : "T-15695" }
{ "_id" : 10821, "average" : 92.8, "studentId" : "T-15245" }
{ "_id" : 10419, "average" : 92.6, "studentId" : "G-23211" }
{ "_id" : 10467, "average" : 92.6, "studentId" : "X-15899" }
{ "_id" : 10474, "average" : 92.6, "studentId" : "X-14034" }
{ "_id" : 10625, "average" : 92.6, "studentId" : "T-30070" }
{ "_id" : 10644, "average" : 92.6, "studentId" : "T-38594" }
{ "_id" : 10713, "average" : 92.6, "studentId" : "T-25988" }
{ "_id" : 10733, "average" : 92.6, "studentId" : "T-15791" }
{ "_id" : 10111, "average" : 92.4, "studentId" : "B-86879" }
{ "_id" : 10455, "average" : 92.4, "studentId" : "X-12486" }
{ "_id" : 10613, "average" : 92.4, "studentId" : "T-27521" }
{ "_id" : 10620, "average" : 92.4, "studentId" : "T-32232" }
{ "_id" : 10631, "average" : 92.4, "studentId" : "T-41709" }
{ "_id" : 10350, "average" : 92.2, "studentId" : "F-21492" }
{ "_id" : 10379, "average" : 92.2, "studentId" : "F-29215" }
{ "_id" : 10489, "average" : 92.2, "studentId" : "X-40986" }
{ "_id" : 10562, "average" : 92.2, "studentId" : "T-28556" }
{ "_id" : 10618, "average" : 92.2, "studentId" : "T-35271" }
{ "_id" : 10723, "average" : 92.2, "studentId" : "T-35004" }
{ "_id" : 10740, "average" : 92.2, "studentId" : "T-16579" }
{ "_id" : 10081, "average" : 92, "studentId" : "B-85552" }
{ "_id" : 10334, "average" : 92, "studentId" : "F-29174" }
{ "_id" : 10505, "average" : 92, "studentId" : "T-24941" }
{ "_id" : 10558, "average" : 92, "studentId" : "T-30172" }
{ "_id" : 10772, "average" : 91.8, "studentId" : "T-17529" }
{ "_id" : 10090, "average" : 91.6, "studentId" : "B-80347" }
{ "_id" : 10154, "average" : 91.6, "studentId" : "B-70983" }
{ "_id" : 10369, "average" : 91.6, "studentId" : "F-21619" }
{ "_id" : 10418, "average" : 91.6, "studentId" : "G-26184" }
{ "_id" : 10439, "average" : 91.6, "studentId" : "G-16885" }
{ "_id" : 10655, "average" : 91.6, "studentId" : "T-16504" }
{ "_id" : 10744, "average" : 91.6, "studentId" : "T-39268" }
{ "_id" : 10342, "average" : 91.4, "studentId" : "F-32541" }
{ "_id" : 10365, "average" : 91.4, "studentId" : "F-29737" }
{ "_id" : 10381, "average" : 91.4, "studentId" : "F-30250" }
{ "_id" : 10452, "average" : 91.4, "studentId" : "X-30421" }
{ "_id" : 10550, "average" : 91.4, "studentId" : "T-30287" }
{ "_id" : 10580, "average" : 91.4, "studentId" : "T-27804" }
{ "_id" : 10601, "average" : 91.4, "studentId" : "T-26395" }
{ "_id" : 10660, "average" : 91.4, "studentId" : "T-24718" }
{ "_id" : 10785, "average" : 91.4, "studentId" : "T-23887" }
{ "_id" : 10816, "average" : 91.4, "studentId" : "T-24589" }
{ "_id" : 10062, "average" : 91.2, "studentId" : "B-74644" }
{ "_id" : 10128, "average" : 91.2, "studentId" : "B-79203" }
{ "_id" : 10275, "average" : 91.2, "studentId" : "B-73831" }
{ "_id" : 10453, "average" : 91.2, "studentId" : "X-21896" }
{ "_id" : 10636, "average" : 91.2, "studentId" : "T-18649" }
{ "_id" : 10648, "average" : 91.2, "studentId" : "T-23477" }
{ "_id" : 10661, "average" : 91.2, "studentId" : "T-25845" }
{ "_id" : 10670, "average" : 91.2, "studentId" : "T-38808" }
{ "_id" : 10717, "average" : 91.2, "studentId" : "T-18725" }
{ "_id" : 10340, "average" : 91, "studentId" : "F-32782" }
{ "_id" : 10388, "average" : 91, "studentId" : "F-28482" }
{ "_id" : 10472, "average" : 91, "studentId" : "X-31456" }
{ "_id" : 10503, "average" : 91, "studentId" : "T-41586" }
{ "_id" : 10510, "average" : 91, "studentId" : "T-26123" }
{ "_id" : 10659, "average" : 91, "studentId" : "T-41280" }
{ "_id" : 10773, "average" : 91, "studentId" : "T-32165" }
{ "_id" : 10781, "average" : 91, "studentId" : "T-37906" }
{ "_id" : 10383, "average" : 90.8, "studentId" : "F-34767" }
{ "_id" : 10387, "average" : 90.8, "studentId" : "F-35108" }
{ "_id" : 10401, "average" : 90.8, "studentId" : "G-18994" }
{ "_id" : 10426, "average" : 90.8, "studentId" : "G-37929" }
{ "_id" : 10591, "average" : 90.8, "studentId" : "T-26296" }
{ "_id" : 10658, "average" : 90.8, "studentId" : "T-29477" }
{ "_id" : 10691, "average" : 90.8, "studentId" : "T-14471" }
{ "_id" : 10133, "average" : 90.6, "studentId" : "B-70528" }
{ "_id" : 10325, "average" : 90.6, "studentId" : "F-39972" }
{ "_id" : 10366, "average" : 90.6, "studentId" : "F-37843" }
{ "_id" : 10417, "average" : 90.6, "studentId" : "G-25001" }
{ "_id" : 10425, "average" : 90.6, "studentId" : "G-24500" }
{ "_id" : 10432, "average" : 90.6, "studentId" : "G-35969" }
{ "_id" : 10451, "average" : 90.6, "studentId" : "X-19600" }
{ "_id" : 10458, "average" : 90.6, "studentId" : "X-30377" }
{ "_id" : 10518, "average" : 90.6, "studentId" : "T-17195" }
{ "_id" : 10547, "average" : 90.6, "studentId" : "T-20274" }
{ "_id" : 10560, "average" : 90.6, "studentId" : "T-15225" }
{ "_id" : 10615, "average" : 90.6, "studentId" : "T-27242" }
{ "_id" : 10689, "average" : 90.6, "studentId" : "T-31945" }
{ "_id" : 10798, "average" : 90.6, "studentId" : "T-37287" }
{ "_id" : 10385, "average" : 90.4, "studentId" : "F-30203" }
{ "_id" : 10454, "average" : 90.4, "studentId" : "X-19186" }
{ "_id" : 10465, "average" : 90.4, "studentId" : "X-40231" }
{ "_id" : 10574, "average" : 90.4, "studentId" : "T-28411" }
{ "_id" : 10118, "average" : 90.2, "studentId" : "B-80200" }
{ "_id" : 10134, "average" : 90.2, "studentId" : "B-75773" }
{ "_id" : 10139, "average" : 90.2, "studentId" : "B-89589" }
{ "_id" : 10237, "average" : 90.2, "studentId" : "B-79146" }
{ "_id" : 10329, "average" : 90.2, "studentId" : "F-40130" }
{ "_id" : 10479, "average" : 90.2, "studentId" : "X-18122" }
{ "_id" : 10536, "average" : 90.2, "studentId" : "T-35752" }
{ "_id" : 10587, "average" : 90.2, "studentId" : "T-18566" }
{ "_id" : 10751, "average" : 90.2, "studentId" : "T-15814" }
{ "_id" : 10808, "average" : 90.2, "studentId" : "T-38166" }
{ "_id" : 10820, "average" : 90.2, "studentId" : "T-16201" }
{ "_id" : 10052, "average" : 90, "studentId" : "A-96461" }
{ "_id" : 10080, "average" : 90, "studentId" : "B-74433" }
{ "_id" : 10099, "average" : 90, "studentId" : "B-74659" }
{ "_id" : 10137, "average" : 90, "studentId" : "B-84936" }
{ "_id" : 10320, "average" : 90, "studentId" : "F-30593" }
{ "_id" : 10362, "average" : 90, "studentId" : "F-21999" }
{ "_id" : 10404, "average" : 90, "studentId" : "G-39204" }
{ "_id" : 10475, "average" : 90, "studentId" : "X-22347" }
{ "_id" : 10532, "average" : 90, "studentId" : "T-12151" }
{ "_id" : 10612, "average" : 90, "studentId" : "T-35065" }
{ "_id" : 10667, "average" : 90, "studentId" : "T-40428" }
{ "_id" : 10677, "average" : 90, "studentId" : "T-18821" }
{ "_id" : 10702, "average" : 90, "studentId" : "T-19396" }
{ "_id" : 10774, "average" : 90, "studentId" : "T-14239" }

*/
