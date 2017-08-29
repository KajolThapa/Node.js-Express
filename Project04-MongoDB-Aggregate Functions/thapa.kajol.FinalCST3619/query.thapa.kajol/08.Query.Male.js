/*
    mongo 08.Query.Male.js
    Display all the male students show all fields
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "gender": "male" } };

var results = db.exams.aggregate([m]);

results.forEach(e => {
    printjson(e);
})

/*
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.3
loading file: 08.Query.Male.js
{
	"_id" : 10001,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 88,
	"studentId" : "A-29847"
}
{
	"_id" : 10002,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 85,
	"studentId" : "A-13679"
}
{
	"_id" : 10004,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 66
		},
		{
			"date" : "2016.04.08",
			"score" : 63
		},
		{
			"date" : "2016.04.15",
			"score" : 68
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 67
		}
	],
	"average" : 67,
	"studentId" : "A-13890"
}
{
	"_id" : 10006,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 83.6,
	"studentId" : "A-18165"
}
{
	"_id" : 10007,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 101
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 94.6,
	"studentId" : "A-19144"
}
{
	"_id" : 10008,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 84.8,
	"studentId" : "A-20227"
}
{
	"_id" : 10015,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 74.8,
	"studentId" : "A-32739"
}
{
	"_id" : 10017,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 67
		},
		{
			"date" : "2016.04.08",
			"score" : 68
		},
		{
			"date" : "2016.04.15",
			"score" : 68
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 69
		}
	],
	"average" : 68.6,
	"studentId" : "A-33254"
}
{
	"_id" : 10019,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 84.8,
	"studentId" : "A-37108"
}
{
	"_id" : 10024,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 85,
	"studentId" : "A-50185"
}
{
	"_id" : 10027,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 95.6,
	"studentId" : "A-53851"
}
{
	"_id" : 10029,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 83.8,
	"studentId" : "A-55663"
}
{
	"_id" : 10031,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 63
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 67
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 68.8,
	"studentId" : "A-60426"
}
{
	"_id" : 10032,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 60
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 60
		},
		{
			"date" : "2016.04.22",
			"score" : 60
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 66.2,
	"studentId" : "A-62613"
}
{
	"_id" : 10033,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 64
		},
		{
			"date" : "2016.04.08",
			"score" : 67
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 64
		}
	],
	"average" : 68.6,
	"studentId" : "A-63288"
}
{
	"_id" : 10034,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 77,
	"studentId" : "A-63678"
}
{
	"_id" : 10038,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 70
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 71.4,
	"studentId" : "A-73940"
}
{
	"_id" : 10042,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 98.6,
	"studentId" : "A-84590"
}
{
	"_id" : 10044,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 66
		},
		{
			"date" : "2016.04.08",
			"score" : 67
		},
		{
			"date" : "2016.04.15",
			"score" : 63
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 67.8,
	"studentId" : "A-85906"
}
{
	"_id" : 10048,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 66
		},
		{
			"date" : "2016.04.15",
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 60
		}
	],
	"average" : 68.4,
	"studentId" : "A-92611"
}
{
	"_id" : 10050,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 96.4,
	"studentId" : "A-93921"
}
{
	"_id" : 10051,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 93.2,
	"studentId" : "A-96229"
}
{
	"_id" : 10053,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 75.6,
	"studentId" : "A-97900"
}
{
	"_id" : 10054,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 68
		},
		{
			"date" : "2016.04.08",
			"score" : 66
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 71.4,
	"studentId" : "A-99251"
}
{
	"_id" : 10055,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 91.8,
	"studentId" : "B-80869"
}
{
	"_id" : 10058,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 90,
	"studentId" : "B-89554"
}
{
	"_id" : 10060,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 77,
	"studentId" : "B-76145"
}
{
	"_id" : 10061,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 76,
	"studentId" : "B-75253"
}
{
	"_id" : 10063,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 83.4,
	"studentId" : "B-85915"
}
{
	"_id" : 10064,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 87.8,
	"studentId" : "B-75487"
}
{
	"_id" : 10067,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 84.6,
	"studentId" : "B-81564"
}
{
	"_id" : 10068,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 94,
	"studentId" : "B-82084"
}
{
	"_id" : 10070,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 80,
	"studentId" : "B-79700"
}
{
	"_id" : 10071,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 84.6,
	"studentId" : "B-76034"
}
{
	"_id" : 10076,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 83.8,
	"studentId" : "B-82114"
}
{
	"_id" : 10078,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 84,
	"studentId" : "B-82573"
}
{
	"_id" : 10079,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 90.4,
	"studentId" : "B-76031"
}
{
	"_id" : 10082,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 79.6,
	"studentId" : "B-88868"
}
{
	"_id" : 10083,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 84.4,
	"studentId" : "B-71430"
}
{
	"_id" : 10088,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 80.2,
	"studentId" : "B-81303"
}
{
	"_id" : 10089,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 79.4,
	"studentId" : "B-73286"
}
{
	"_id" : 10094,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 87.6,
	"studentId" : "B-87293"
}
{
	"_id" : 10097,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 90.4,
	"studentId" : "B-76783"
}
{
	"_id" : 10102,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 89.6,
	"studentId" : "B-79281"
}
{
	"_id" : 10105,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 84.4,
	"studentId" : "B-80596"
}
{
	"_id" : 10106,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.2,
	"studentId" : "B-73433"
}
{
	"_id" : 10107,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 86.4,
	"studentId" : "B-86269"
}
{
	"_id" : 10109,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 86.6,
	"studentId" : "B-77430"
}
{
	"_id" : 10115,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 86.2,
	"studentId" : "B-71648"
}
{
	"_id" : 10116,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 79.4,
	"studentId" : "B-76305"
}
{
	"_id" : 10119,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 82.4,
	"studentId" : "B-88113"
}
{
	"_id" : 10123,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 90,
	"studentId" : "B-77490"
}
{
	"_id" : 10126,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 72
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 77.4,
	"studentId" : "B-77935"
}
{
	"_id" : 10131,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 77.4,
	"studentId" : "B-77329"
}
{
	"_id" : 10132,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 87,
	"studentId" : "B-81879"
}
{
	"_id" : 10136,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 83.2,
	"studentId" : "B-82042"
}
{
	"_id" : 10143,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 87.8,
	"studentId" : "B-70093"
}
{
	"_id" : 10145,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 88,
	"studentId" : "B-87602"
}
{
	"_id" : 10147,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 85.8,
	"studentId" : "B-83044"
}
{
	"_id" : 10150,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 89,
	"studentId" : "B-84764"
}
{
	"_id" : 10157,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 86.6,
	"studentId" : "B-75818"
}
{
	"_id" : 10158,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 88.6,
	"studentId" : "B-76055"
}
{
	"_id" : 10159,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 86,
	"studentId" : "B-79746"
}
{
	"_id" : 10161,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 79
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 82.8,
	"studentId" : "B-82806"
}
{
	"_id" : 10165,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91,
	"studentId" : "B-81027"
}
{
	"_id" : 10166,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 80.8,
	"studentId" : "B-84874"
}
{
	"_id" : 10167,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 84.4,
	"studentId" : "B-74226"
}
{
	"_id" : 10170,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 86,
	"studentId" : "B-88834"
}
{
	"_id" : 10173,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 86.2,
	"studentId" : "B-75161"
}
{
	"_id" : 10175,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 85.4,
	"studentId" : "B-87816"
}
{
	"_id" : 10176,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 87.4,
	"studentId" : "B-87404"
}
{
	"_id" : 10177,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 83.2,
	"studentId" : "B-70643"
}
{
	"_id" : 10183,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 76.6,
	"studentId" : "B-82017"
}
{
	"_id" : 10187,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 80.4,
	"studentId" : "B-88513"
}
{
	"_id" : 10191,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 79.8,
	"studentId" : "B-86668"
}
{
	"_id" : 10193,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91,
	"studentId" : "B-84041"
}
{
	"_id" : 10196,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 84.8,
	"studentId" : "B-89252"
}
{
	"_id" : 10197,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 85.6,
	"studentId" : "B-72102"
}
{
	"_id" : 10201,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 87,
	"studentId" : "B-87891"
}
{
	"_id" : 10203,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 87,
	"studentId" : "B-70409"
}
{
	"_id" : 10206,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 87.2,
	"studentId" : "B-78380"
}
{
	"_id" : 10209,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 86.4,
	"studentId" : "B-89517"
}
{
	"_id" : 10211,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 80.8,
	"studentId" : "B-76415"
}
{
	"_id" : 10212,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 89.4,
	"studentId" : "B-86132"
}
{
	"_id" : 10214,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 83.2,
	"studentId" : "B-70248"
}
{
	"_id" : 10224,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90.6,
	"studentId" : "B-78519"
}
{
	"_id" : 10225,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 83,
	"studentId" : "B-72324"
}
{
	"_id" : 10227,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 84.4,
	"studentId" : "B-88760"
}
{
	"_id" : 10228,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 85.8,
	"studentId" : "B-80824"
}
{
	"_id" : 10231,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 90.6,
	"studentId" : "B-82687"
}
{
	"_id" : 10232,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 84.6,
	"studentId" : "B-71530"
}
{
	"_id" : 10233,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86.2,
	"studentId" : "B-82229"
}
{
	"_id" : 10239,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 76.6,
	"studentId" : "B-78071"
}
{
	"_id" : 10244,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 81.8,
	"studentId" : "B-86382"
}
{
	"_id" : 10250,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 91,
	"studentId" : "B-83583"
}
{
	"_id" : 10251,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91.2,
	"studentId" : "B-84666"
}
{
	"_id" : 10252,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 83,
	"studentId" : "B-88619"
}
{
	"_id" : 10255,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 86.2,
	"studentId" : "B-82839"
}
{
	"_id" : 10257,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 84.4,
	"studentId" : "B-74567"
}
{
	"_id" : 10258,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 86.6,
	"studentId" : "B-77426"
}
{
	"_id" : 10259,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 83,
	"studentId" : "B-78002"
}
{
	"_id" : 10261,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 90.4,
	"studentId" : "B-86643"
}
{
	"_id" : 10263,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 82,
	"studentId" : "B-71186"
}
{
	"_id" : 10267,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 81,
	"studentId" : "B-78331"
}
{
	"_id" : 10277,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 87.4,
	"studentId" : "B-75027"
}
{
	"_id" : 10279,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 86.4,
	"studentId" : "B-78961"
}
{
	"_id" : 10280,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 88.4,
	"studentId" : "B-73438"
}
{
	"_id" : 10281,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 89.6,
	"studentId" : "B-87575"
}
{
	"_id" : 10283,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 86,
	"studentId" : "B-75343"
}
{
	"_id" : 10287,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 78.8,
	"studentId" : "B-73879"
}
{
	"_id" : 10289,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 70
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 83,
	"studentId" : "B-84059"
}
{
	"_id" : 10290,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 81.4,
	"studentId" : "B-87224"
}
{
	"_id" : 10291,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 89.2,
	"studentId" : "B-82949"
}
{
	"_id" : 10292,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 89.4,
	"studentId" : "B-75187"
}
{
	"_id" : 10296,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 94.2,
	"studentId" : "B-75991"
}
{
	"_id" : 10297,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 76.6,
	"studentId" : "B-74269"
}
{
	"_id" : 10301,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 91.4,
	"studentId" : "B-89713"
}
{
	"_id" : 10302,
	"gender" : "male",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 81.6,
	"studentId" : "B-89061"
}
{
	"_id" : 10308,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 87.6,
	"studentId" : "B-77429"
}
{
	"_id" : 10309,
	"gender" : "male",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 86.8,
	"studentId" : "B-88144"
}
{
	"_id" : 10310,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 81.6,
	"studentId" : "B-85035"
}
{
	"_id" : 10312,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 60
		},
		{
			"date" : "2016.04.08",
			"score" : 60
		},
		{
			"date" : "2016.04.15",
			"score" : 60
		},
		{
			"date" : "2016.04.22",
			"score" : 60
		},
		{
			"date" : "2016.04.29",
			"score" : 60
		}
	],
	"average" : 60,
	"studentId" : "B-81466"
}
{
	"_id" : 10313,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 92.8,
	"studentId" : "F-27139"
}
{
	"_id" : 10314,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 94,
	"studentId" : "F-36313"
}
{
	"_id" : 10315,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 98,
	"studentId" : "F-38457"
}
{
	"_id" : 10319,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 83.4,
	"studentId" : "F-23461"
}
{
	"_id" : 10323,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 90.6,
	"studentId" : "F-18281"
}
{
	"_id" : 10324,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 89.4,
	"studentId" : "F-24967"
}
{
	"_id" : 10327,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 96.6,
	"studentId" : "F-14644"
}
{
	"_id" : 10330,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 90.4,
	"studentId" : "F-40180"
}
{
	"_id" : 10331,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 92.2,
	"studentId" : "F-39122"
}
{
	"_id" : 10332,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 93.6,
	"studentId" : "F-35016"
}
{
	"_id" : 10337,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 88.8,
	"studentId" : "F-38425"
}
{
	"_id" : 10339,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 86,
	"studentId" : "F-31486"
}
{
	"_id" : 10341,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 87.4,
	"studentId" : "F-35697"
}
{
	"_id" : 10346,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 90.4,
	"studentId" : "F-25354"
}
{
	"_id" : 10347,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 86.4,
	"studentId" : "F-34597"
}
{
	"_id" : 10348,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 83.4,
	"studentId" : "F-37616"
}
{
	"_id" : 10351,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 93.2,
	"studentId" : "F-23593"
}
{
	"_id" : 10359,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 89.8,
	"studentId" : "F-19004"
}
{
	"_id" : 10368,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 90.2,
	"studentId" : "F-16334"
}
{
	"_id" : 10375,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 89,
	"studentId" : "F-37998"
}
{
	"_id" : 10376,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 95.6,
	"studentId" : "F-34446"
}
{
	"_id" : 10380,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87,
	"studentId" : "F-28071"
}
{
	"_id" : 10382,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 93,
	"studentId" : "F-12616"
}
{
	"_id" : 10390,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 93.2,
	"studentId" : "F-19660"
}
{
	"_id" : 10392,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 91,
	"studentId" : "F-33366"
}
{
	"_id" : 10393,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91,
	"studentId" : "F-39615"
}
{
	"_id" : 10398,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 99.2,
	"studentId" : "F-25909"
}
{
	"_id" : 10399,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 89.8,
	"studentId" : "F-31014"
}
{
	"_id" : 10400,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 97,
	"studentId" : "F-36289"
}
{
	"_id" : 10402,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 88.6,
	"studentId" : "G-37666"
}
{
	"_id" : 10407,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 92.8,
	"studentId" : "G-25183"
}
{
	"_id" : 10408,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 88.4,
	"studentId" : "G-36572"
}
{
	"_id" : 10412,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 83,
	"studentId" : "G-18491"
}
{
	"_id" : 10420,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91.6,
	"studentId" : "G-33450"
}
{
	"_id" : 10422,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 92.6,
	"studentId" : "G-17336"
}
{
	"_id" : 10424,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 89.4,
	"studentId" : "G-29980"
}
{
	"_id" : 10427,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91.6,
	"studentId" : "G-16609"
}
{
	"_id" : 10431,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 91.2,
	"studentId" : "G-19573"
}
{
	"_id" : 10434,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 90.2,
	"studentId" : "G-39055"
}
{
	"_id" : 10435,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 90.2,
	"studentId" : "G-32846"
}
{
	"_id" : 10436,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 91.6,
	"studentId" : "G-25195"
}
{
	"_id" : 10440,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 85.6,
	"studentId" : "G-19113"
}
{
	"_id" : 10443,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 89.4,
	"studentId" : "X-26896"
}
{
	"_id" : 10444,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86.2,
	"studentId" : "X-37928"
}
{
	"_id" : 10445,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 91,
	"studentId" : "X-39100"
}
{
	"_id" : 10446,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 87.2,
	"studentId" : "X-32643"
}
{
	"_id" : 10448,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 93.2,
	"studentId" : "X-20166"
}
{
	"_id" : 10449,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 88,
	"studentId" : "X-21424"
}
{
	"_id" : 10457,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 89.4,
	"studentId" : "X-30709"
}
{
	"_id" : 10460,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 84.2,
	"studentId" : "X-27214"
}
{
	"_id" : 10462,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 87.8,
	"studentId" : "X-22395"
}
{
	"_id" : 10468,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 89.2,
	"studentId" : "X-20738"
}
{
	"_id" : 10478,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.6,
	"studentId" : "X-13914"
}
{
	"_id" : 10483,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 90.8,
	"studentId" : "X-19238"
}
{
	"_id" : 10485,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 87.4,
	"studentId" : "X-27088"
}
{
	"_id" : 10492,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 84.4,
	"studentId" : "X-13281"
}
{
	"_id" : 10498,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 85.4,
	"studentId" : "T-14100"
}
{
	"_id" : 10499,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 91.8,
	"studentId" : "T-31616"
}
{
	"_id" : 10502,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 95,
	"studentId" : "T-28331"
}
{
	"_id" : 10507,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 92.4,
	"studentId" : "T-26973"
}
{
	"_id" : 10512,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 87,
	"studentId" : "T-37973"
}
{
	"_id" : 10514,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 96.6,
	"studentId" : "T-41980"
}
{
	"_id" : 10517,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86.6,
	"studentId" : "T-18112"
}
{
	"_id" : 10519,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 87,
	"studentId" : "T-32731"
}
{
	"_id" : 10520,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 94.4,
	"studentId" : "T-30022"
}
{
	"_id" : 10521,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 96,
	"studentId" : "T-24606"
}
{
	"_id" : 10522,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 88.2,
	"studentId" : "T-15867"
}
{
	"_id" : 10526,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 84.4,
	"studentId" : "T-34947"
}
{
	"_id" : 10528,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90.6,
	"studentId" : "T-40782"
}
{
	"_id" : 10534,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 94.2,
	"studentId" : "T-41084"
}
{
	"_id" : 10535,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 87.8,
	"studentId" : "T-37040"
}
{
	"_id" : 10538,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 86.8,
	"studentId" : "T-16031"
}
{
	"_id" : 10540,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 83,
	"studentId" : "T-41772"
}
{
	"_id" : 10542,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 93.8,
	"studentId" : "T-12641"
}
{
	"_id" : 10551,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 87,
	"studentId" : "T-33702"
}
{
	"_id" : 10553,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 81.6,
	"studentId" : "T-35917"
}
{
	"_id" : 10555,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 87.4,
	"studentId" : "T-24533"
}
{
	"_id" : 10556,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 93.6,
	"studentId" : "T-29578"
}
{
	"_id" : 10561,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 91.2,
	"studentId" : "T-17572"
}
{
	"_id" : 10564,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 88.2,
	"studentId" : "T-28011"
}
{
	"_id" : 10567,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 86,
	"studentId" : "T-29429"
}
{
	"_id" : 10568,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 93.8,
	"studentId" : "T-25237"
}
{
	"_id" : 10571,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 85.6,
	"studentId" : "T-23293"
}
{
	"_id" : 10575,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 92.8,
	"studentId" : "T-21763"
}
{
	"_id" : 10578,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 82.6,
	"studentId" : "T-25924"
}
{
	"_id" : 10584,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 90.2,
	"studentId" : "T-29784"
}
{
	"_id" : 10586,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 92.2,
	"studentId" : "T-14652"
}
{
	"_id" : 10588,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 92.2,
	"studentId" : "T-33452"
}
{
	"_id" : 10590,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 89.2,
	"studentId" : "T-23033"
}
{
	"_id" : 10593,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 93.4,
	"studentId" : "T-18142"
}
{
	"_id" : 10598,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 87.6,
	"studentId" : "T-22536"
}
{
	"_id" : 10599,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 94.4,
	"studentId" : "T-30957"
}
{
	"_id" : 10600,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 97.2,
	"studentId" : "T-19968"
}
{
	"_id" : 10602,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 88.6,
	"studentId" : "T-23112"
}
{
	"_id" : 10603,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 94,
	"studentId" : "T-37972"
}
{
	"_id" : 10606,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 85.6,
	"studentId" : "T-37821"
}
{
	"_id" : 10610,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 88,
	"studentId" : "T-12130"
}
{
	"_id" : 10616,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 85,
	"studentId" : "T-20638"
}
{
	"_id" : 10617,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 85.6,
	"studentId" : "T-39473"
}
{
	"_id" : 10628,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 88,
	"studentId" : "T-25691"
}
{
	"_id" : 10632,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91.4,
	"studentId" : "T-20176"
}
{
	"_id" : 10633,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 92.8,
	"studentId" : "T-13971"
}
{
	"_id" : 10635,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 91.2,
	"studentId" : "T-33089"
}
{
	"_id" : 10637,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 88,
	"studentId" : "T-34355"
}
{
	"_id" : 10638,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 97.4,
	"studentId" : "T-30005"
}
{
	"_id" : 10642,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 86.6,
	"studentId" : "T-17007"
}
{
	"_id" : 10649,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 94.8,
	"studentId" : "T-34746"
}
{
	"_id" : 10654,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 92.4,
	"studentId" : "T-32351"
}
{
	"_id" : 10668,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 91.6,
	"studentId" : "T-32375"
}
{
	"_id" : 10674,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 89.8,
	"studentId" : "T-23834"
}
{
	"_id" : 10675,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 87.6,
	"studentId" : "T-21992"
}
{
	"_id" : 10679,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 87.4,
	"studentId" : "T-28910"
}
{
	"_id" : 10681,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 87.6,
	"studentId" : "T-33947"
}
{
	"_id" : 10683,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 88.4,
	"studentId" : "T-35231"
}
{
	"_id" : 10687,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 94.4,
	"studentId" : "T-23294"
}
{
	"_id" : 10692,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 86.4,
	"studentId" : "T-32248"
}
{
	"_id" : 10695,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 90.6,
	"studentId" : "T-16801"
}
{
	"_id" : 10698,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 91.8,
	"studentId" : "T-40482"
}
{
	"_id" : 10703,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 90.4,
	"studentId" : "T-41188"
}
{
	"_id" : 10704,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 90.8,
	"studentId" : "T-14513"
}
{
	"_id" : 10706,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 87,
	"studentId" : "T-19416"
}
{
	"_id" : 10708,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 88.4,
	"studentId" : "T-35481"
}
{
	"_id" : 10711,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 92.8,
	"studentId" : "T-19916"
}
{
	"_id" : 10715,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 86,
	"studentId" : "T-16199"
}
{
	"_id" : 10716,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 97.2,
	"studentId" : "T-40999"
}
{
	"_id" : 10724,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 81,
	"studentId" : "T-33845"
}
{
	"_id" : 10728,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 82.8,
	"studentId" : "T-13633"
}
{
	"_id" : 10732,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87.8,
	"studentId" : "T-12088"
}
{
	"_id" : 10745,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 98.4,
	"studentId" : "T-20141"
}
{
	"_id" : 10746,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 87.2,
	"studentId" : "T-39003"
}
{
	"_id" : 10747,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 93.8,
	"studentId" : "T-37367"
}
{
	"_id" : 10749,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 98.4,
	"studentId" : "T-30486"
}
{
	"_id" : 10752,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 95.6,
	"studentId" : "T-16939"
}
{
	"_id" : 10753,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 94.2,
	"studentId" : "T-38342"
}
{
	"_id" : 10754,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90,
	"studentId" : "T-22306"
}
{
	"_id" : 10755,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 93.4,
	"studentId" : "T-27433"
}
{
	"_id" : 10756,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 86.4,
	"studentId" : "T-23906"
}
{
	"_id" : 10758,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 89,
	"studentId" : "T-34859"
}
{
	"_id" : 10759,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 90.8,
	"studentId" : "T-17570"
}
{
	"_id" : 10760,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 84.2,
	"studentId" : "T-38104"
}
{
	"_id" : 10761,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 88,
	"studentId" : "T-19879"
}
{
	"_id" : 10765,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 89,
	"studentId" : "T-30517"
}
{
	"_id" : 10766,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 89.8,
	"studentId" : "T-33812"
}
{
	"_id" : 10768,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 88.2,
	"studentId" : "T-37422"
}
{
	"_id" : 10771,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 88.8,
	"studentId" : "T-35741"
}
{
	"_id" : 10775,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 88.8,
	"studentId" : "T-17433"
}
{
	"_id" : 10776,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 84,
	"studentId" : "T-12892"
}
{
	"_id" : 10777,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 96.4,
	"studentId" : "T-25326"
}
{
	"_id" : 10778,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 84.4,
	"studentId" : "T-28670"
}
{
	"_id" : 10780,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 92,
	"studentId" : "T-14927"
}
{
	"_id" : 10782,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 90.6,
	"studentId" : "T-30381"
}
{
	"_id" : 10789,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90.2,
	"studentId" : "T-25142"
}
{
	"_id" : 10791,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 86,
	"studentId" : "T-18751"
}
{
	"_id" : 10792,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 95.6,
	"studentId" : "T-31186"
}
{
	"_id" : 10793,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 83,
	"studentId" : "T-25926"
}
{
	"_id" : 10794,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 93.2,
	"studentId" : "T-40888"
}
{
	"_id" : 10801,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 94,
	"studentId" : "T-24097"
}
{
	"_id" : 10813,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 94.8,
	"studentId" : "T-22675"
}
{
	"_id" : 10815,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 90.6,
	"studentId" : "T-40045"
}
{
	"_id" : 10817,
	"gender" : "male",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 82.4,
	"studentId" : "T-40842"
}
{
	"_id" : 10819,
	"gender" : "male",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91.8,
	"studentId" : "T-19308"
}
{
	"_id" : 10824,
	"gender" : "male",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 84,
	"studentId" : "T-15314"
}

*/