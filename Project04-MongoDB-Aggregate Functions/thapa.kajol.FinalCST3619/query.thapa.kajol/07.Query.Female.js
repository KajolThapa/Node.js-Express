/*
    mongo 07.Query.Female.js
    Display all the female students show all fields
*/

var db = db.getSiblingDB("examsdb");
var m = { $match: { "gender": "female" } };

var results = db.exams.aggregate([m]);

results.forEach(e => {
    printjson(e);
})

/*
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.3
loading file: 07.Query.Female.js
{
	"_id" : 10003,
	"gender" : "female",
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
			"score" : 90
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
	"average" : 93.2,
	"studentId" : "A-13878"
}
{
	"_id" : 10005,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 86.8,
	"studentId" : "A-14944"
}
{
	"_id" : 10009,
	"gender" : "female",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 82.6,
	"studentId" : "A-21912"
}
{
	"_id" : 10010,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
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
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 79.6,
	"studentId" : "A-24547"
}
{
	"_id" : 10011,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 63
		},
		{
			"date" : "2016.04.08",
			"score" : 65
		},
		{
			"date" : "2016.04.15",
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 65
		}
	],
	"average" : 67.8,
	"studentId" : "A-25021"
}
{
	"_id" : 10012,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 85.2,
	"studentId" : "A-26350"
}
{
	"_id" : 10013,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 98
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
			"score" : 98
		}
	],
	"average" : 94.8,
	"studentId" : "A-28570"
}
{
	"_id" : 10014,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 74.8,
	"studentId" : "A-31800"
}
{
	"_id" : 10016,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 89
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
			"score" : 85
		}
	],
	"average" : 86.4,
	"studentId" : "A-33131"
}
{
	"_id" : 10018,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 78
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
			"score" : 74
		}
	],
	"average" : 77.6,
	"studentId" : "A-33896"
}
{
	"_id" : 10020,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 73
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
	"average" : 73.8,
	"studentId" : "A-41177"
}
{
	"_id" : 10021,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 63
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
			"score" : 69
		},
		{
			"date" : "2016.04.29",
			"score" : 67
		}
	],
	"average" : 63.8,
	"studentId" : "A-43123"
}
{
	"_id" : 10022,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 85.8,
	"studentId" : "A-43460"
}
{
	"_id" : 10023,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 79
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 77.4,
	"studentId" : "A-49693"
}
{
	"_id" : 10025,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 77.6,
	"studentId" : "A-50677"
}
{
	"_id" : 10026,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 76.4,
	"studentId" : "A-51694"
}
{
	"_id" : 10028,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 65
		},
		{
			"date" : "2016.04.08",
			"score" : 65
		},
		{
			"date" : "2016.04.15",
			"score" : 67
		},
		{
			"date" : "2016.04.22",
			"score" : 67
		},
		{
			"date" : "2016.04.29",
			"score" : 61
		}
	],
	"average" : 65,
	"studentId" : "A-54445"
}
{
	"_id" : 10030,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
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
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 74.8,
	"studentId" : "A-57786"
}
{
	"_id" : 10035,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 75.4,
	"studentId" : "A-63802"
}
{
	"_id" : 10036,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 94
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
			"score" : 93
		}
	],
	"average" : 97.4,
	"studentId" : "A-70197"
}
{
	"_id" : 10037,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 87.4,
	"studentId" : "A-71078"
}
{
	"_id" : 10039,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 93.2,
	"studentId" : "A-77426"
}
{
	"_id" : 10040,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 82
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
			"score" : 87
		}
	],
	"average" : 84.8,
	"studentId" : "A-78411"
}
{
	"_id" : 10041,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
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
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 77,
	"studentId" : "A-84031"
}
{
	"_id" : 10043,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 75.8,
	"studentId" : "A-85250"
}
{
	"_id" : 10045,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
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
			"score" : 87
		}
	],
	"average" : 86.4,
	"studentId" : "A-87981"
}
{
	"_id" : 10046,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 77,
	"studentId" : "A-88430"
}
{
	"_id" : 10047,
	"gender" : "female",
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
			"score" : 61
		},
		{
			"date" : "2016.04.22",
			"score" : 68
		},
		{
			"date" : "2016.04.29",
			"score" : 68
		}
	],
	"average" : 68.4,
	"studentId" : "A-92306"
}
{
	"_id" : 10049,
	"gender" : "female",
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
			"score" : 66
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 70.6,
	"studentId" : "A-93277"
}
{
	"_id" : 10052,
	"gender" : "female",
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
	"average" : 90,
	"studentId" : "A-96461"
}
{
	"_id" : 10056,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
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
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 87.6,
	"studentId" : "B-81661"
}
{
	"_id" : 10057,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 72
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 82.6,
	"studentId" : "B-80562"
}
{
	"_id" : 10059,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 70
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 82.6,
	"studentId" : "B-81957"
}
{
	"_id" : 10062,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 91.2,
	"studentId" : "B-74644"
}
{
	"_id" : 10065,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 82.6,
	"studentId" : "B-76174"
}
{
	"_id" : 10066,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 85.2,
	"studentId" : "B-79743"
}
{
	"_id" : 10069,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 77
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
			"score" : 76
		}
	],
	"average" : 78.6,
	"studentId" : "B-76428"
}
{
	"_id" : 10072,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
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
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 88.2,
	"studentId" : "B-83335"
}
{
	"_id" : 10073,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 79
		},
		{
			"date" : "2016.04.08",
			"score" : 81
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
			"score" : 78
		}
	],
	"average" : 86.2,
	"studentId" : "B-81839"
}
{
	"_id" : 10074,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 75
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
			"score" : 84
		}
	],
	"average" : 85,
	"studentId" : "B-71454"
}
{
	"_id" : 10075,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 87,
	"studentId" : "B-86923"
}
{
	"_id" : 10077,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 79.4,
	"studentId" : "B-78695"
}
{
	"_id" : 10080,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90,
	"studentId" : "B-74433"
}
{
	"_id" : 10081,
	"gender" : "female",
	"county" : "longisland",
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
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 92,
	"studentId" : "B-85552"
}
{
	"_id" : 10084,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 83.6,
	"studentId" : "B-71724"
}
{
	"_id" : 10085,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 83.8,
	"studentId" : "B-84945"
}
{
	"_id" : 10086,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 72
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 75.4,
	"studentId" : "B-74306"
}
{
	"_id" : 10087,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89,
	"studentId" : "B-87961"
}
{
	"_id" : 10090,
	"gender" : "female",
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
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 91.6,
	"studentId" : "B-80347"
}
{
	"_id" : 10091,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 70
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 86,
	"studentId" : "B-72007"
}
{
	"_id" : 10092,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 71
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
			"score" : 70
		}
	],
	"average" : 81.8,
	"studentId" : "B-77890"
}
{
	"_id" : 10093,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 72
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 79.4,
	"studentId" : "B-75346"
}
{
	"_id" : 10095,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 85.8,
	"studentId" : "B-72514"
}
{
	"_id" : 10096,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 83.2,
	"studentId" : "B-81821"
}
{
	"_id" : 10098,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 81,
	"studentId" : "B-83566"
}
{
	"_id" : 10099,
	"gender" : "female",
	"county" : "longisland",
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
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 90,
	"studentId" : "B-74659"
}
{
	"_id" : 10100,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 99
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
	"average" : 88.8,
	"studentId" : "B-70565"
}
{
	"_id" : 10101,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 76.8,
	"studentId" : "B-74571"
}
{
	"_id" : 10103,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 70
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 87.2,
	"studentId" : "B-82613"
}
{
	"_id" : 10104,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
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
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 88.2,
	"studentId" : "B-76824"
}
{
	"_id" : 10108,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 83.6,
	"studentId" : "B-86384"
}
{
	"_id" : 10110,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 81
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
			"score" : 79
		}
	],
	"average" : 85.8,
	"studentId" : "B-78803"
}
{
	"_id" : 10111,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 80
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
			"score" : 99
		}
	],
	"average" : 92.4,
	"studentId" : "B-86879"
}
{
	"_id" : 10112,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 87.6,
	"studentId" : "B-80029"
}
{
	"_id" : 10113,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 100
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
	"average" : 86.8,
	"studentId" : "B-84083"
}
{
	"_id" : 10114,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
			"score" : 70
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 81.6,
	"studentId" : "B-71370"
}
{
	"_id" : 10117,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 86.4,
	"studentId" : "B-78848"
}
{
	"_id" : 10118,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 79
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
	"average" : 90.2,
	"studentId" : "B-80200"
}
{
	"_id" : 10120,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87.4,
	"studentId" : "B-73602"
}
{
	"_id" : 10121,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 99
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
			"score" : 88
		}
	],
	"average" : 89.2,
	"studentId" : "B-88172"
}
{
	"_id" : 10122,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 80.4,
	"studentId" : "B-75788"
}
{
	"_id" : 10124,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 84.6,
	"studentId" : "B-75731"
}
{
	"_id" : 10125,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 81.4,
	"studentId" : "B-75763"
}
{
	"_id" : 10127,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
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
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 80.4,
	"studentId" : "B-77782"
}
{
	"_id" : 10128,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 76
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
			"score" : 94
		}
	],
	"average" : 91.2,
	"studentId" : "B-79203"
}
{
	"_id" : 10129,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 87,
	"studentId" : "B-71070"
}
{
	"_id" : 10130,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
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
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 85.4,
	"studentId" : "B-84382"
}
{
	"_id" : 10133,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
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
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 90.6,
	"studentId" : "B-70528"
}
{
	"_id" : 10134,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 90.2,
	"studentId" : "B-75773"
}
{
	"_id" : 10135,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 80.2,
	"studentId" : "B-78373"
}
{
	"_id" : 10137,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 90,
	"studentId" : "B-84936"
}
{
	"_id" : 10138,
	"gender" : "female",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 86,
	"studentId" : "B-88002"
}
{
	"_id" : 10139,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 90.2,
	"studentId" : "B-89589"
}
{
	"_id" : 10140,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 96
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
	"average" : 88.8,
	"studentId" : "B-82807"
}
{
	"_id" : 10141,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 76
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 85.6,
	"studentId" : "B-89724"
}
{
	"_id" : 10142,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 100
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
	"average" : 89,
	"studentId" : "B-70313"
}
{
	"_id" : 10144,
	"gender" : "female",
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
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 81.6,
	"studentId" : "B-88689"
}
{
	"_id" : 10146,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 82.2,
	"studentId" : "B-76952"
}
{
	"_id" : 10148,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 95
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
	"average" : 84.4,
	"studentId" : "B-81581"
}
{
	"_id" : 10149,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 78
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
	"average" : 87.8,
	"studentId" : "B-81341"
}
{
	"_id" : 10151,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
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
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 87.6,
	"studentId" : "B-77443"
}
{
	"_id" : 10152,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 83
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
	"average" : 85.2,
	"studentId" : "B-78601"
}
{
	"_id" : 10153,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 87
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
	"studentId" : "B-71495"
}
{
	"_id" : 10154,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 98
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
	"average" : 91.6,
	"studentId" : "B-70983"
}
{
	"_id" : 10155,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86.2,
	"studentId" : "B-86753"
}
{
	"_id" : 10156,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 85
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
	"average" : 83.4,
	"studentId" : "B-76790"
}
{
	"_id" : 10160,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 81.4,
	"studentId" : "B-77741"
}
{
	"_id" : 10162,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
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
			"score" : 95
		}
	],
	"average" : 84.2,
	"studentId" : "B-77560"
}
{
	"_id" : 10163,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 84.8,
	"studentId" : "B-89344"
}
{
	"_id" : 10164,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 86
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
			"score" : 82
		}
	],
	"average" : 85.6,
	"studentId" : "B-70655"
}
{
	"_id" : 10168,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 100
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
	"average" : 87.8,
	"studentId" : "B-72300"
}
{
	"_id" : 10169,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
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
	"average" : 82,
	"studentId" : "B-86309"
}
{
	"_id" : 10171,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 82.4,
	"studentId" : "B-89858"
}
{
	"_id" : 10172,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 84,
	"studentId" : "B-89841"
}
{
	"_id" : 10174,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
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
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 76
		}
	],
	"average" : 80.8,
	"studentId" : "B-75123"
}
{
	"_id" : 10178,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 93,
	"studentId" : "B-83457"
}
{
	"_id" : 10179,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 72
		}
	],
	"average" : 77.6,
	"studentId" : "B-76923"
}
{
	"_id" : 10180,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
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
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 87,
	"studentId" : "B-74704"
}
{
	"_id" : 10181,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 79.6,
	"studentId" : "B-78799"
}
{
	"_id" : 10182,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 83.2,
	"studentId" : "B-79091"
}
{
	"_id" : 10184,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 88.4,
	"studentId" : "B-89733"
}
{
	"_id" : 10185,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 77
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 78.2,
	"studentId" : "B-70198"
}
{
	"_id" : 10186,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
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
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 86,
	"studentId" : "B-80000"
}
{
	"_id" : 10188,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 75
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 80,
	"studentId" : "B-89517"
}
{
	"_id" : 10189,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 84,
	"studentId" : "B-77813"
}
{
	"_id" : 10190,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 88
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
			"score" : 85
		}
	],
	"average" : 88.2,
	"studentId" : "B-74371"
}
{
	"_id" : 10192,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 72
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 79.6,
	"studentId" : "B-73134"
}
{
	"_id" : 10194,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 93,
	"studentId" : "B-86242"
}
{
	"_id" : 10195,
	"gender" : "female",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 85.4,
	"studentId" : "B-72871"
}
{
	"_id" : 10198,
	"gender" : "female",
	"county" : "longisland",
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
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 85.6,
	"studentId" : "B-77976"
}
{
	"_id" : 10199,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87,
	"studentId" : "B-71255"
}
{
	"_id" : 10200,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
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
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 85.2,
	"studentId" : "B-76419"
}
{
	"_id" : 10202,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 86.4,
	"studentId" : "B-82807"
}
{
	"_id" : 10204,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 78,
	"studentId" : "B-71067"
}
{
	"_id" : 10205,
	"gender" : "female",
	"county" : "longisland",
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
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 87.4,
	"studentId" : "B-74770"
}
{
	"_id" : 10207,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 87.6,
	"studentId" : "B-76233"
}
{
	"_id" : 10208,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 88.6,
	"studentId" : "B-75238"
}
{
	"_id" : 10210,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 86.4,
	"studentId" : "B-81812"
}
{
	"_id" : 10213,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 89.8,
	"studentId" : "B-78812"
}
{
	"_id" : 10215,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 84.4,
	"studentId" : "B-70095"
}
{
	"_id" : 10216,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 81
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
	"average" : 87.4,
	"studentId" : "B-76507"
}
{
	"_id" : 10217,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 79
		},
		{
			"date" : "2016.04.15",
			"score" : 95
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
	"average" : 83.6,
	"studentId" : "B-70668"
}
{
	"_id" : 10218,
	"gender" : "female",
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
			"score" : 74
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 78.2,
	"studentId" : "B-72668"
}
{
	"_id" : 10219,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 74
		}
	],
	"average" : 82.8,
	"studentId" : "B-79781"
}
{
	"_id" : 10220,
	"gender" : "female",
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
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 78
		}
	],
	"average" : 80.4,
	"studentId" : "B-72536"
}
{
	"_id" : 10221,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 89
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
			"score" : 95
		}
	],
	"average" : 87.8,
	"studentId" : "B-89805"
}
{
	"_id" : 10222,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 92
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
	"average" : 87,
	"studentId" : "B-82586"
}
{
	"_id" : 10223,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 74
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
			"score" : 79
		}
	],
	"average" : 79.2,
	"studentId" : "B-76682"
}
{
	"_id" : 10226,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 81.2,
	"studentId" : "B-78142"
}
{
	"_id" : 10229,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
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
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 87.4,
	"studentId" : "B-70290"
}
{
	"_id" : 10230,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 76
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
	"average" : 86.4,
	"studentId" : "B-84069"
}
{
	"_id" : 10234,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 74
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
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 83,
	"studentId" : "B-88493"
}
{
	"_id" : 10235,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 75
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
	"average" : 82.4,
	"studentId" : "B-83573"
}
{
	"_id" : 10236,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 78
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86.4,
	"studentId" : "B-82989"
}
{
	"_id" : 10237,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 90.2,
	"studentId" : "B-79146"
}
{
	"_id" : 10238,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 93
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
			"score" : 94
		}
	],
	"average" : 87.2,
	"studentId" : "B-76352"
}
{
	"_id" : 10240,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 72
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 78.6,
	"studentId" : "B-75829"
}
{
	"_id" : 10241,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 74
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
			"score" : 86
		}
	],
	"average" : 80.6,
	"studentId" : "B-87144"
}
{
	"_id" : 10242,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 83.8,
	"studentId" : "B-85632"
}
{
	"_id" : 10243,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 75
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 76
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 87.2,
	"studentId" : "B-78330"
}
{
	"_id" : 10245,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 84.2,
	"studentId" : "B-75643"
}
{
	"_id" : 10246,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 72
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 82.4,
	"studentId" : "B-83716"
}
{
	"_id" : 10247,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 96
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
			"score" : 86
		}
	],
	"average" : 87.8,
	"studentId" : "B-79535"
}
{
	"_id" : 10248,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 87.4,
	"studentId" : "B-79726"
}
{
	"_id" : 10249,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 76
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 84,
	"studentId" : "B-70438"
}
{
	"_id" : 10253,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
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
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 75
		}
	],
	"average" : 88.2,
	"studentId" : "B-76486"
}
{
	"_id" : 10254,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 83.6,
	"studentId" : "B-88419"
}
{
	"_id" : 10256,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
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
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 85.6,
	"studentId" : "B-85315"
}
{
	"_id" : 10260,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 85
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
			"score" : 100
		}
	],
	"average" : 88,
	"studentId" : "B-71206"
}
{
	"_id" : 10262,
	"gender" : "female",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 71
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 88.8,
	"studentId" : "B-82682"
}
{
	"_id" : 10264,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 84
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
	"average" : 88.2,
	"studentId" : "B-87572"
}
{
	"_id" : 10265,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 86.6,
	"studentId" : "B-73023"
}
{
	"_id" : 10266,
	"gender" : "female",
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
			"score" : 88
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
	"average" : 86.8,
	"studentId" : "B-77823"
}
{
	"_id" : 10268,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 70
		}
	],
	"average" : 81,
	"studentId" : "B-77808"
}
{
	"_id" : 10269,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 82.8,
	"studentId" : "B-73693"
}
{
	"_id" : 10270,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 70
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
	"average" : 88.2,
	"studentId" : "B-83907"
}
{
	"_id" : 10271,
	"gender" : "female",
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
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 99.2,
	"studentId" : "B-87623"
}
{
	"_id" : 10272,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 77
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 83.6,
	"studentId" : "B-73933"
}
{
	"_id" : 10273,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 73
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 83.4,
	"studentId" : "B-71231"
}
{
	"_id" : 10274,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 77
		}
	],
	"average" : 81.6,
	"studentId" : "B-76413"
}
{
	"_id" : 10275,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 91
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
			"score" : 95
		}
	],
	"average" : 91.2,
	"studentId" : "B-73831"
}
{
	"_id" : 10276,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 74
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 84.8,
	"studentId" : "B-72115"
}
{
	"_id" : 10278,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 73
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 83,
	"studentId" : "B-81414"
}
{
	"_id" : 10282,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 72
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 85,
	"studentId" : "B-84172"
}
{
	"_id" : 10284,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
		},
		{
			"date" : "2016.04.08",
			"score" : 90
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
			"score" : 81
		}
	],
	"average" : 84.6,
	"studentId" : "B-88526"
}
{
	"_id" : 10285,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 77
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 89.2,
	"studentId" : "B-74097"
}
{
	"_id" : 10286,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 74
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 86,
	"studentId" : "B-75421"
}
{
	"_id" : 10288,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 76
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
			"score" : 84
		}
	],
	"average" : 86.4,
	"studentId" : "B-89368"
}
{
	"_id" : 10293,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 70
		},
		{
			"date" : "2016.04.08",
			"score" : 71
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 78
		},
		{
			"date" : "2016.04.29",
			"score" : 73
		}
	],
	"average" : 77.4,
	"studentId" : "B-79225"
}
{
	"_id" : 10294,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 77
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
			"score" : 96
		}
	],
	"average" : 89,
	"studentId" : "B-89953"
}
{
	"_id" : 10295,
	"gender" : "female",
	"county" : "longisland",
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
			"score" : 84
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
	"average" : 82.2,
	"studentId" : "B-73062"
}
{
	"_id" : 10298,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 76
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 75
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 89.2,
	"studentId" : "B-73330"
}
{
	"_id" : 10299,
	"gender" : "female",
	"county" : "westchester",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 93
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
			"score" : 95
		}
	],
	"average" : 88.8,
	"studentId" : "B-76357"
}
{
	"_id" : 10300,
	"gender" : "female",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 79
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 89.2,
	"studentId" : "B-74661"
}
{
	"_id" : 10303,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 75
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
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 87.2,
	"studentId" : "B-72769"
}
{
	"_id" : 10304,
	"gender" : "female",
	"county" : "westchester",
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
			"score" : 79
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 79
		}
	],
	"average" : 82.6,
	"studentId" : "B-87055"
}
{
	"_id" : 10305,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 73
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 71
		},
		{
			"date" : "2016.04.22",
			"score" : 73
		},
		{
			"date" : "2016.04.29",
			"score" : 71
		}
	],
	"average" : 73.8,
	"studentId" : "B-73163"
}
{
	"_id" : 10306,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 78
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 76
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
	"average" : 83.2,
	"studentId" : "B-85567"
}
{
	"_id" : 10307,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 78
		},
		{
			"date" : "2016.04.15",
			"score" : 84
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
	"average" : 83.8,
	"studentId" : "B-77036"
}
{
	"_id" : 10311,
	"gender" : "female",
	"county" : "longisland",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 71
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
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 82.4,
	"studentId" : "B-81465"
}
{
	"_id" : 10316,
	"gender" : "female",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 87.8,
	"studentId" : "F-40482"
}
{
	"_id" : 10317,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 88
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
	"average" : 93.4,
	"studentId" : "F-33710"
}
{
	"_id" : 10318,
	"gender" : "female",
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
	"average" : 94.6,
	"studentId" : "F-35815"
}
{
	"_id" : 10320,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
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
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 90,
	"studentId" : "F-30593"
}
{
	"_id" : 10321,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 86.2,
	"studentId" : "F-38904"
}
{
	"_id" : 10322,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.8,
	"studentId" : "F-15808"
}
{
	"_id" : 10325,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 90.6,
	"studentId" : "F-39972"
}
{
	"_id" : 10326,
	"gender" : "female",
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
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 88.2,
	"studentId" : "F-32570"
}
{
	"_id" : 10328,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 83
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
	"average" : 84.6,
	"studentId" : "F-22191"
}
{
	"_id" : 10329,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 90.2,
	"studentId" : "F-40130"
}
{
	"_id" : 10333,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 88,
	"studentId" : "F-24953"
}
{
	"_id" : 10334,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 92,
	"studentId" : "F-29174"
}
{
	"_id" : 10335,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 88.4,
	"studentId" : "F-12006"
}
{
	"_id" : 10336,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 98,
	"studentId" : "F-13613"
}
{
	"_id" : 10338,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 86.8,
	"studentId" : "F-37392"
}
{
	"_id" : 10340,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 91,
	"studentId" : "F-32782"
}
{
	"_id" : 10342,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 91.4,
	"studentId" : "F-32541"
}
{
	"_id" : 10343,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
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
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 89.8,
	"studentId" : "F-32600"
}
{
	"_id" : 10344,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 93,
	"studentId" : "F-41569"
}
{
	"_id" : 10345,
	"gender" : "female",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 87.6,
	"studentId" : "F-37624"
}
{
	"_id" : 10349,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 84.8,
	"studentId" : "F-41708"
}
{
	"_id" : 10350,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 92.2,
	"studentId" : "F-21492"
}
{
	"_id" : 10352,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 82
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
	"average" : 86.8,
	"studentId" : "F-18888"
}
{
	"_id" : 10353,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
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
	"average" : 97.8,
	"studentId" : "F-35679"
}
{
	"_id" : 10354,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
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
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 85,
	"studentId" : "F-34667"
}
{
	"_id" : 10355,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 88.6,
	"studentId" : "F-32888"
}
{
	"_id" : 10356,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 88.2,
	"studentId" : "F-34435"
}
{
	"_id" : 10357,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 87.6,
	"studentId" : "F-37588"
}
{
	"_id" : 10358,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
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
	"average" : 81.8,
	"studentId" : "F-17182"
}
{
	"_id" : 10360,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 83
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
	"average" : 84.4,
	"studentId" : "F-32905"
}
{
	"_id" : 10361,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
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
	"average" : 87.2,
	"studentId" : "F-22811"
}
{
	"_id" : 10362,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
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
	"average" : 90,
	"studentId" : "F-21999"
}
{
	"_id" : 10363,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 95.2,
	"studentId" : "F-34083"
}
{
	"_id" : 10364,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 88,
	"studentId" : "F-12791"
}
{
	"_id" : 10365,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 89
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
	"average" : 91.4,
	"studentId" : "F-29737"
}
{
	"_id" : 10366,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 90.6,
	"studentId" : "F-37843"
}
{
	"_id" : 10367,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 88.4,
	"studentId" : "F-32854"
}
{
	"_id" : 10369,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 91.6,
	"studentId" : "F-21619"
}
{
	"_id" : 10370,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 92.8,
	"studentId" : "F-25293"
}
{
	"_id" : 10371,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 95.4,
	"studentId" : "F-23156"
}
{
	"_id" : 10372,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 88.2,
	"studentId" : "F-25199"
}
{
	"_id" : 10373,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
	"average" : 93,
	"studentId" : "F-36362"
}
{
	"_id" : 10374,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 92.8,
	"studentId" : "F-17362"
}
{
	"_id" : 10377,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 88,
	"studentId" : "F-37657"
}
{
	"_id" : 10378,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 96.4,
	"studentId" : "F-24768"
}
{
	"_id" : 10379,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 92.2,
	"studentId" : "F-29215"
}
{
	"_id" : 10381,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
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
	"average" : 91.4,
	"studentId" : "F-30250"
}
{
	"_id" : 10383,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 90.8,
	"studentId" : "F-34767"
}
{
	"_id" : 10384,
	"gender" : "female",
	"county" : "queens",
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
	"studentId" : "F-36085"
}
{
	"_id" : 10385,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 90.4,
	"studentId" : "F-30203"
}
{
	"_id" : 10386,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 89.2,
	"studentId" : "F-29171"
}
{
	"_id" : 10387,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 90.8,
	"studentId" : "F-35108"
}
{
	"_id" : 10388,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91,
	"studentId" : "F-28482"
}
{
	"_id" : 10389,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 83.6,
	"studentId" : "F-31822"
}
{
	"_id" : 10391,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
	"average" : 85.2,
	"studentId" : "F-29341"
}
{
	"_id" : 10394,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 82.8,
	"studentId" : "F-37442"
}
{
	"_id" : 10395,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 89,
	"studentId" : "F-28542"
}
{
	"_id" : 10396,
	"gender" : "female",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 87.8,
	"studentId" : "F-27241"
}
{
	"_id" : 10397,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.8,
	"studentId" : "F-15285"
}
{
	"_id" : 10401,
	"gender" : "female",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 90.8,
	"studentId" : "G-18994"
}
{
	"_id" : 10403,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 94.6,
	"studentId" : "G-12552"
}
{
	"_id" : 10404,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
	"average" : 90,
	"studentId" : "G-39204"
}
{
	"_id" : 10405,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 87.8,
	"studentId" : "G-22472"
}
{
	"_id" : 10406,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 100
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
	"average" : 96,
	"studentId" : "G-25160"
}
{
	"_id" : 10409,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 96,
	"studentId" : "G-18115"
}
{
	"_id" : 10410,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 83.2,
	"studentId" : "G-28239"
}
{
	"_id" : 10411,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
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
	"average" : 88.8,
	"studentId" : "G-23371"
}
{
	"_id" : 10413,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 86.8,
	"studentId" : "G-28993"
}
{
	"_id" : 10414,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.2,
	"studentId" : "G-24720"
}
{
	"_id" : 10415,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 94.4,
	"studentId" : "G-16155"
}
{
	"_id" : 10416,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 85.4,
	"studentId" : "G-32648"
}
{
	"_id" : 10417,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 90.6,
	"studentId" : "G-25001"
}
{
	"_id" : 10418,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 84
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
	"average" : 91.6,
	"studentId" : "G-26184"
}
{
	"_id" : 10419,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 92.6,
	"studentId" : "G-23211"
}
{
	"_id" : 10421,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 95.2,
	"studentId" : "G-25182"
}
{
	"_id" : 10423,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 83.2,
	"studentId" : "G-22983"
}
{
	"_id" : 10425,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
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
	"average" : 90.6,
	"studentId" : "G-24500"
}
{
	"_id" : 10426,
	"gender" : "female",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 90.8,
	"studentId" : "G-37929"
}
{
	"_id" : 10428,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 88.2,
	"studentId" : "G-39567"
}
{
	"_id" : 10429,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 99
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
			"score" : 98
		}
	],
	"average" : 96.2,
	"studentId" : "G-27942"
}
{
	"_id" : 10430,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 98.2,
	"studentId" : "G-32036"
}
{
	"_id" : 10432,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 90.6,
	"studentId" : "G-35969"
}
{
	"_id" : 10433,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 93,
	"studentId" : "G-24843"
}
{
	"_id" : 10437,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
	"average" : 80.8,
	"studentId" : "G-41494"
}
{
	"_id" : 10438,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.6,
	"studentId" : "G-29311"
}
{
	"_id" : 10439,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 91.6,
	"studentId" : "G-16885"
}
{
	"_id" : 10441,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
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
			"score" : 93
		}
	],
	"average" : 89.4,
	"studentId" : "G-15779"
}
{
	"_id" : 10442,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 86.2,
	"studentId" : "G-34274"
}
{
	"_id" : 10447,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
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
	"average" : 83,
	"studentId" : "X-18631"
}
{
	"_id" : 10450,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
	"average" : 93.2,
	"studentId" : "X-26542"
}
{
	"_id" : 10451,
	"gender" : "female",
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
	"average" : 90.6,
	"studentId" : "X-19600"
}
{
	"_id" : 10452,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 86
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
			"score" : 98
		}
	],
	"average" : 91.4,
	"studentId" : "X-30421"
}
{
	"_id" : 10453,
	"gender" : "female",
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
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 91.2,
	"studentId" : "X-21896"
}
{
	"_id" : 10454,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 90.4,
	"studentId" : "X-19186"
}
{
	"_id" : 10455,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
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
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 92.4,
	"studentId" : "X-12486"
}
{
	"_id" : 10456,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 88.8,
	"studentId" : "X-19916"
}
{
	"_id" : 10458,
	"gender" : "female",
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
	"average" : 90.6,
	"studentId" : "X-30377"
}
{
	"_id" : 10459,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
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
	"average" : 93.2,
	"studentId" : "X-38347"
}
{
	"_id" : 10461,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
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
	"average" : 83.8,
	"studentId" : "X-25932"
}
{
	"_id" : 10463,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 85.2,
	"studentId" : "X-36045"
}
{
	"_id" : 10464,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 93.6,
	"studentId" : "X-29084"
}
{
	"_id" : 10465,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 90.4,
	"studentId" : "X-40231"
}
{
	"_id" : 10466,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 87.8,
	"studentId" : "X-37168"
}
{
	"_id" : 10467,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 92.6,
	"studentId" : "X-15899"
}
{
	"_id" : 10469,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 96.4,
	"studentId" : "X-16291"
}
{
	"_id" : 10470,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 91
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
	"average" : 87.4,
	"studentId" : "X-41013"
}
{
	"_id" : 10471,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 84,
	"studentId" : "X-19729"
}
{
	"_id" : 10472,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91,
	"studentId" : "X-31456"
}
{
	"_id" : 10473,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 95,
	"studentId" : "X-27390"
}
{
	"_id" : 10474,
	"gender" : "female",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 92.6,
	"studentId" : "X-14034"
}
{
	"_id" : 10475,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 90
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 90,
	"studentId" : "X-22347"
}
{
	"_id" : 10476,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
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
	"average" : 92.8,
	"studentId" : "X-36124"
}
{
	"_id" : 10477,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
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
	"average" : 95,
	"studentId" : "X-27536"
}
{
	"_id" : 10479,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 90.2,
	"studentId" : "X-18122"
}
{
	"_id" : 10480,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 87.2,
	"studentId" : "X-31717"
}
{
	"_id" : 10481,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
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
	"average" : 84.8,
	"studentId" : "X-20512"
}
{
	"_id" : 10482,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 98.4,
	"studentId" : "X-18019"
}
{
	"_id" : 10484,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 88.6,
	"studentId" : "X-30056"
}
{
	"_id" : 10486,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 83,
	"studentId" : "X-25451"
}
{
	"_id" : 10487,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 87.6,
	"studentId" : "X-26962"
}
{
	"_id" : 10488,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 88.8,
	"studentId" : "X-15569"
}
{
	"_id" : 10489,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 91
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 92.2,
	"studentId" : "X-40986"
}
{
	"_id" : 10490,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 93,
	"studentId" : "X-12138"
}
{
	"_id" : 10491,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
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
	"average" : 89,
	"studentId" : "X-14192"
}
{
	"_id" : 10493,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 86,
	"studentId" : "X-39942"
}
{
	"_id" : 10494,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 88.4,
	"studentId" : "X-31677"
}
{
	"_id" : 10495,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 88.8,
	"studentId" : "X-15659"
}
{
	"_id" : 10496,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 97
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
	"average" : 96.4,
	"studentId" : "X-28087"
}
{
	"_id" : 10497,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 83.6,
	"studentId" : "T-29645"
}
{
	"_id" : 10500,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 100
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
	"average" : 95,
	"studentId" : "T-17458"
}
{
	"_id" : 10501,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 93.2,
	"studentId" : "T-22267"
}
{
	"_id" : 10503,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
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
	"average" : 91,
	"studentId" : "T-41586"
}
{
	"_id" : 10504,
	"gender" : "female",
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
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 88.6,
	"studentId" : "T-32363"
}
{
	"_id" : 10505,
	"gender" : "female",
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
			"score" : 88
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
	"average" : 92,
	"studentId" : "T-24941"
}
{
	"_id" : 10506,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 85,
	"studentId" : "T-41002"
}
{
	"_id" : 10508,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
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
	"average" : 87.6,
	"studentId" : "T-39957"
}
{
	"_id" : 10509,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 82.2,
	"studentId" : "T-18647"
}
{
	"_id" : 10510,
	"gender" : "female",
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
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 91,
	"studentId" : "T-26123"
}
{
	"_id" : 10511,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 94.6,
	"studentId" : "T-15973"
}
{
	"_id" : 10513,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 99
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
			"score" : 98
		}
	],
	"average" : 97.2,
	"studentId" : "T-20469"
}
{
	"_id" : 10515,
	"gender" : "female",
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
	"average" : 88.4,
	"studentId" : "T-30114"
}
{
	"_id" : 10516,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 85.8,
	"studentId" : "T-16233"
}
{
	"_id" : 10518,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 90.6,
	"studentId" : "T-17195"
}
{
	"_id" : 10523,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 94
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
	"average" : 88.2,
	"studentId" : "T-27700"
}
{
	"_id" : 10524,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 95.4,
	"studentId" : "T-40551"
}
{
	"_id" : 10525,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 84,
	"studentId" : "T-27975"
}
{
	"_id" : 10527,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
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
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 98,
	"studentId" : "T-15508"
}
{
	"_id" : 10529,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 87
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
			"score" : 84
		}
	],
	"average" : 87.8,
	"studentId" : "T-28171"
}
{
	"_id" : 10530,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 84.6,
	"studentId" : "T-20796"
}
{
	"_id" : 10531,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 87.8,
	"studentId" : "T-29286"
}
{
	"_id" : 10532,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 90,
	"studentId" : "T-12151"
}
{
	"_id" : 10533,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.2,
	"studentId" : "T-18887"
}
{
	"_id" : 10536,
	"gender" : "female",
	"county" : "brooklyn",
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
	"studentId" : "T-35752"
}
{
	"_id" : 10537,
	"gender" : "female",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 89.4,
	"studentId" : "T-16671"
}
{
	"_id" : 10539,
	"gender" : "female",
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
	"average" : 86.4,
	"studentId" : "T-13181"
}
{
	"_id" : 10541,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 97,
	"studentId" : "T-19526"
}
{
	"_id" : 10543,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 93.6,
	"studentId" : "T-41683"
}
{
	"_id" : 10544,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 87.2,
	"studentId" : "T-23572"
}
{
	"_id" : 10545,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 99
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
			"score" : 93
		}
	],
	"average" : 95.4,
	"studentId" : "T-26410"
}
{
	"_id" : 10546,
	"gender" : "female",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 88.2,
	"studentId" : "T-32358"
}
{
	"_id" : 10547,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 97
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 97
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 90.6,
	"studentId" : "T-20274"
}
{
	"_id" : 10548,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 85,
	"studentId" : "T-38997"
}
{
	"_id" : 10549,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 89
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
	"average" : 94.6,
	"studentId" : "T-40956"
}
{
	"_id" : 10550,
	"gender" : "female",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 91.4,
	"studentId" : "T-30287"
}
{
	"_id" : 10552,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 89.4,
	"studentId" : "T-40988"
}
{
	"_id" : 10554,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 88
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
			"score" : 86
		}
	],
	"average" : 85.8,
	"studentId" : "T-24198"
}
{
	"_id" : 10557,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
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
	"average" : 89.6,
	"studentId" : "T-28128"
}
{
	"_id" : 10558,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 92,
	"studentId" : "T-30172"
}
{
	"_id" : 10559,
	"gender" : "female",
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
	"average" : 95.4,
	"studentId" : "T-13120"
}
{
	"_id" : 10560,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
	"average" : 90.6,
	"studentId" : "T-15225"
}
{
	"_id" : 10562,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
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
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 92.2,
	"studentId" : "T-28556"
}
{
	"_id" : 10563,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 88.4,
	"studentId" : "T-14776"
}
{
	"_id" : 10565,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 93.6,
	"studentId" : "T-26480"
}
{
	"_id" : 10566,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
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
	"average" : 94.6,
	"studentId" : "T-36271"
}
{
	"_id" : 10569,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 95,
	"studentId" : "T-37638"
}
{
	"_id" : 10570,
	"gender" : "female",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 88.8,
	"studentId" : "T-30333"
}
{
	"_id" : 10572,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 84
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
	"average" : 93.2,
	"studentId" : "T-40680"
}
{
	"_id" : 10573,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 84.8,
	"studentId" : "T-41071"
}
{
	"_id" : 10574,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 90.4,
	"studentId" : "T-28411"
}
{
	"_id" : 10576,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
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
	"average" : 86.6,
	"studentId" : "T-23033"
}
{
	"_id" : 10577,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 89.6,
	"studentId" : "T-36106"
}
{
	"_id" : 10579,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 87.8,
	"studentId" : "T-21273"
}
{
	"_id" : 10580,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 91.4,
	"studentId" : "T-27804"
}
{
	"_id" : 10581,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 89,
	"studentId" : "T-22142"
}
{
	"_id" : 10582,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 89,
	"studentId" : "T-30126"
}
{
	"_id" : 10583,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
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
	"average" : 97,
	"studentId" : "T-21130"
}
{
	"_id" : 10585,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 88.8,
	"studentId" : "T-32347"
}
{
	"_id" : 10587,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 90.2,
	"studentId" : "T-18566"
}
{
	"_id" : 10589,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 87
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
			"score" : 80
		}
	],
	"average" : 86.6,
	"studentId" : "T-24030"
}
{
	"_id" : 10591,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 90.8,
	"studentId" : "T-26296"
}
{
	"_id" : 10592,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 89
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
			"score" : 87
		}
	],
	"average" : 87,
	"studentId" : "T-17386"
}
{
	"_id" : 10594,
	"gender" : "female",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 94.4,
	"studentId" : "T-36256"
}
{
	"_id" : 10595,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 86.8,
	"studentId" : "T-23511"
}
{
	"_id" : 10596,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 87.8,
	"studentId" : "T-14872"
}
{
	"_id" : 10597,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 84.2,
	"studentId" : "T-16195"
}
{
	"_id" : 10601,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 91.4,
	"studentId" : "T-26395"
}
{
	"_id" : 10604,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 88,
	"studentId" : "T-22076"
}
{
	"_id" : 10605,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 100
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 89,
	"studentId" : "T-14682"
}
{
	"_id" : 10607,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
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
	"average" : 89.4,
	"studentId" : "T-35133"
}
{
	"_id" : 10608,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 84
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
	"average" : 86.4,
	"studentId" : "T-34586"
}
{
	"_id" : 10609,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 89.4,
	"studentId" : "T-40585"
}
{
	"_id" : 10611,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 84
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 88.8,
	"studentId" : "T-30113"
}
{
	"_id" : 10612,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
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
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 90,
	"studentId" : "T-35065"
}
{
	"_id" : 10613,
	"gender" : "female",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 92.4,
	"studentId" : "T-27521"
}
{
	"_id" : 10614,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 87.2,
	"studentId" : "T-34591"
}
{
	"_id" : 10615,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 90.6,
	"studentId" : "T-27242"
}
{
	"_id" : 10618,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 92.2,
	"studentId" : "T-35271"
}
{
	"_id" : 10619,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 83
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
	"average" : 85.4,
	"studentId" : "T-19436"
}
{
	"_id" : 10620,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 92.4,
	"studentId" : "T-32232"
}
{
	"_id" : 10621,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
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
	"average" : 85.6,
	"studentId" : "T-14136"
}
{
	"_id" : 10622,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
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
	"average" : 88.8,
	"studentId" : "T-31334"
}
{
	"_id" : 10623,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 95.8,
	"studentId" : "T-28511"
}
{
	"_id" : 10624,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 95.6,
	"studentId" : "T-21744"
}
{
	"_id" : 10625,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 92.6,
	"studentId" : "T-30070"
}
{
	"_id" : 10626,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87.6,
	"studentId" : "T-14838"
}
{
	"_id" : 10627,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 86.2,
	"studentId" : "T-16524"
}
{
	"_id" : 10629,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 85.4,
	"studentId" : "T-16730"
}
{
	"_id" : 10630,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 81.4,
	"studentId" : "T-35029"
}
{
	"_id" : 10631,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 88
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
	"average" : 92.4,
	"studentId" : "T-41709"
}
{
	"_id" : 10634,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 88,
	"studentId" : "T-30305"
}
{
	"_id" : 10636,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 91.2,
	"studentId" : "T-18649"
}
{
	"_id" : 10639,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 86,
	"studentId" : "T-17845"
}
{
	"_id" : 10640,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 82
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 86
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
	"average" : 85.6,
	"studentId" : "T-30082"
}
{
	"_id" : 10641,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
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
	"average" : 86.6,
	"studentId" : "T-20492"
}
{
	"_id" : 10643,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
	"average" : 97.8,
	"studentId" : "T-33581"
}
{
	"_id" : 10644,
	"gender" : "female",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 92.6,
	"studentId" : "T-38594"
}
{
	"_id" : 10645,
	"gender" : "female",
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
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 87.8,
	"studentId" : "T-36091"
}
{
	"_id" : 10646,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
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
	"average" : 94.6,
	"studentId" : "T-19935"
}
{
	"_id" : 10647,
	"gender" : "female",
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
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 86.4,
	"studentId" : "T-18793"
}
{
	"_id" : 10648,
	"gender" : "female",
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
	"studentId" : "T-23477"
}
{
	"_id" : 10650,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 93.2,
	"studentId" : "T-32772"
}
{
	"_id" : 10651,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
	"average" : 96.2,
	"studentId" : "T-39812"
}
{
	"_id" : 10652,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 88,
	"studentId" : "T-19431"
}
{
	"_id" : 10653,
	"gender" : "female",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 93.4,
	"studentId" : "T-33714"
}
{
	"_id" : 10655,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 91.6,
	"studentId" : "T-16504"
}
{
	"_id" : 10656,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 86,
	"studentId" : "T-32497"
}
{
	"_id" : 10657,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
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
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 95,
	"studentId" : "T-29886"
}
{
	"_id" : 10658,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 90.8,
	"studentId" : "T-29477"
}
{
	"_id" : 10659,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 95
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 91,
	"studentId" : "T-41280"
}
{
	"_id" : 10660,
	"gender" : "female",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 91.4,
	"studentId" : "T-24718"
}
{
	"_id" : 10661,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 91.2,
	"studentId" : "T-25845"
}
{
	"_id" : 10662,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 88
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
			"score" : 86
		}
	],
	"average" : 87.8,
	"studentId" : "T-14629"
}
{
	"_id" : 10663,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 97
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
	"average" : 93.8,
	"studentId" : "T-13673"
}
{
	"_id" : 10664,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 95.4,
	"studentId" : "T-32010"
}
{
	"_id" : 10665,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 87.2,
	"studentId" : "T-30624"
}
{
	"_id" : 10666,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 89,
	"studentId" : "T-22648"
}
{
	"_id" : 10667,
	"gender" : "female",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 90,
	"studentId" : "T-40428"
}
{
	"_id" : 10669,
	"gender" : "female",
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
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 88,
	"studentId" : "T-30121"
}
{
	"_id" : 10670,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 91.2,
	"studentId" : "T-38808"
}
{
	"_id" : 10671,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 87
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 86.8,
	"studentId" : "T-26023"
}
{
	"_id" : 10672,
	"gender" : "female",
	"county" : "brooklyn",
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
	"studentId" : "T-26931"
}
{
	"_id" : 10673,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 85.4,
	"studentId" : "T-23796"
}
{
	"_id" : 10676,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 94,
	"studentId" : "T-27569"
}
{
	"_id" : 10677,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 90,
	"studentId" : "T-18821"
}
{
	"_id" : 10678,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 93.4,
	"studentId" : "T-12380"
}
{
	"_id" : 10680,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
		},
		{
			"date" : "2016.04.08",
			"score" : 83
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
			"score" : 82
		}
	],
	"average" : 83,
	"studentId" : "T-13944"
}
{
	"_id" : 10682,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 89.6,
	"studentId" : "T-36733"
}
{
	"_id" : 10684,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 94
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
	"average" : 87.4,
	"studentId" : "T-21635"
}
{
	"_id" : 10685,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 85.6,
	"studentId" : "T-29423"
}
{
	"_id" : 10686,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 87.6,
	"studentId" : "T-12107"
}
{
	"_id" : 10688,
	"gender" : "female",
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
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 94.4,
	"studentId" : "T-32757"
}
{
	"_id" : 10689,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 90.6,
	"studentId" : "T-31945"
}
{
	"_id" : 10690,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 99
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 93.2,
	"studentId" : "T-34532"
}
{
	"_id" : 10691,
	"gender" : "female",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 90.8,
	"studentId" : "T-14471"
}
{
	"_id" : 10693,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 81
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
	"average" : 85.4,
	"studentId" : "T-36881"
}
{
	"_id" : 10694,
	"gender" : "female",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 93.6,
	"studentId" : "T-29843"
}
{
	"_id" : 10696,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 86
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 88.2,
	"studentId" : "T-41347"
}
{
	"_id" : 10697,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 100
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 94.8,
	"studentId" : "T-22818"
}
{
	"_id" : 10699,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 86.4,
	"studentId" : "T-13790"
}
{
	"_id" : 10700,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 86
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 86
		}
	],
	"average" : 89.4,
	"studentId" : "T-20032"
}
{
	"_id" : 10701,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 93.4,
	"studentId" : "T-17254"
}
{
	"_id" : 10702,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 83
		},
		{
			"date" : "2016.04.15",
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 83
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 90,
	"studentId" : "T-19396"
}
{
	"_id" : 10705,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 86.6,
	"studentId" : "T-15535"
}
{
	"_id" : 10707,
	"gender" : "female",
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
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 84.6,
	"studentId" : "T-38600"
}
{
	"_id" : 10709,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 86.8,
	"studentId" : "T-25862"
}
{
	"_id" : 10710,
	"gender" : "female",
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
	"average" : 89.2,
	"studentId" : "T-16014"
}
{
	"_id" : 10712,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 88
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 83
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
	"studentId" : "T-28762"
}
{
	"_id" : 10713,
	"gender" : "female",
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
			"score" : 84
		},
		{
			"date" : "2016.04.22",
			"score" : 99
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 92.6,
	"studentId" : "T-25988"
}
{
	"_id" : 10714,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 87.4,
	"studentId" : "T-19143"
}
{
	"_id" : 10717,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 91
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 91.2,
	"studentId" : "T-18725"
}
{
	"_id" : 10718,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 89,
	"studentId" : "T-27067"
}
{
	"_id" : 10719,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 87.6,
	"studentId" : "T-40197"
}
{
	"_id" : 10720,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 80
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 80
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 84.4,
	"studentId" : "T-14521"
}
{
	"_id" : 10721,
	"gender" : "female",
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
	"average" : 94,
	"studentId" : "T-24078"
}
{
	"_id" : 10722,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 99
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
			"score" : 87
		}
	],
	"average" : 92.8,
	"studentId" : "T-41264"
}
{
	"_id" : 10723,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 98
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 98
		}
	],
	"average" : 92.2,
	"studentId" : "T-35004"
}
{
	"_id" : 10725,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 88
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 88
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 93.4,
	"studentId" : "T-41567"
}
{
	"_id" : 10726,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 98
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 97
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 97
		}
	],
	"average" : 96.4,
	"studentId" : "T-25331"
}
{
	"_id" : 10727,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 89,
	"studentId" : "T-32971"
}
{
	"_id" : 10729,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
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
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 87
		}
	],
	"average" : 88.4,
	"studentId" : "T-26846"
}
{
	"_id" : 10730,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 84
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 93.4,
	"studentId" : "T-38789"
}
{
	"_id" : 10731,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 84,
	"studentId" : "T-30723"
}
{
	"_id" : 10733,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 92.6,
	"studentId" : "T-15791"
}
{
	"_id" : 10734,
	"gender" : "female",
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
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 87.8,
	"studentId" : "T-26637"
}
{
	"_id" : 10735,
	"gender" : "female",
	"county" : "queens",
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
	"average" : 88,
	"studentId" : "T-29556"
}
{
	"_id" : 10736,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 87.8,
	"studentId" : "T-33340"
}
{
	"_id" : 10737,
	"gender" : "female",
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
	"average" : 85.8,
	"studentId" : "T-35102"
}
{
	"_id" : 10738,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 89.4,
	"studentId" : "T-12660"
}
{
	"_id" : 10739,
	"gender" : "female",
	"county" : "queens",
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
			"score" : 94
		},
		{
			"date" : "2016.04.22",
			"score" : 90
		},
		{
			"date" : "2016.04.29",
			"score" : 94
		}
	],
	"average" : 89.6,
	"studentId" : "T-40539"
}
{
	"_id" : 10740,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
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
	"average" : 92.2,
	"studentId" : "T-16579"
}
{
	"_id" : 10741,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
		},
		{
			"date" : "2016.04.08",
			"score" : 82
		},
		{
			"date" : "2016.04.15",
			"score" : 80
		},
		{
			"date" : "2016.04.22",
			"score" : 82
		},
		{
			"date" : "2016.04.29",
			"score" : 80
		}
	],
	"average" : 84.2,
	"studentId" : "T-13930"
}
{
	"_id" : 10742,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
	"average" : 95.4,
	"studentId" : "T-31103"
}
{
	"_id" : 10743,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 89
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 89.6,
	"studentId" : "T-18750"
}
{
	"_id" : 10744,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 88
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
	"average" : 91.6,
	"studentId" : "T-39268"
}
{
	"_id" : 10748,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 83
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
	"average" : 93,
	"studentId" : "T-35962"
}
{
	"_id" : 10750,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 80
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 84.8,
	"studentId" : "T-28134"
}
{
	"_id" : 10751,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 90.2,
	"studentId" : "T-15814"
}
{
	"_id" : 10757,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
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
	"average" : 88.2,
	"studentId" : "T-26470"
}
{
	"_id" : 10762,
	"gender" : "female",
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
	"average" : 94.8,
	"studentId" : "T-36983"
}
{
	"_id" : 10763,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 89
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 82
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 82
		}
	],
	"average" : 89.8,
	"studentId" : "T-19655"
}
{
	"_id" : 10764,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 94
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
	"average" : 84.4,
	"studentId" : "T-27405"
}
{
	"_id" : 10767,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
		},
		{
			"date" : "2016.04.08",
			"score" : 95
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 95
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 88.8,
	"studentId" : "T-36616"
}
{
	"_id" : 10769,
	"gender" : "female",
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
			"score" : 98
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
	"average" : 98,
	"studentId" : "T-14649"
}
{
	"_id" : 10770,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
		},
		{
			"date" : "2016.04.08",
			"score" : 89
		},
		{
			"date" : "2016.04.15",
			"score" : 81
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
	"average" : 86.2,
	"studentId" : "T-29848"
}
{
	"_id" : 10772,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 84
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 91.8,
	"studentId" : "T-17529"
}
{
	"_id" : 10773,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 89
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
	"average" : 91,
	"studentId" : "T-32165"
}
{
	"_id" : 10774,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 81
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 81
		}
	],
	"average" : 90,
	"studentId" : "T-14239"
}
{
	"_id" : 10779,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 92
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
	"average" : 85.2,
	"studentId" : "T-24270"
}
{
	"_id" : 10781,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 93
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 93
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 91,
	"studentId" : "T-37906"
}
{
	"_id" : 10783,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 94
		},
		{
			"date" : "2016.04.15",
			"score" : 83
		},
		{
			"date" : "2016.04.22",
			"score" : 94
		},
		{
			"date" : "2016.04.29",
			"score" : 83
		}
	],
	"average" : 88.8,
	"studentId" : "T-29653"
}
{
	"_id" : 10784,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 93,
	"studentId" : "T-24216"
}
{
	"_id" : 10785,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 92
		},
		{
			"date" : "2016.04.15",
			"score" : 93
		},
		{
			"date" : "2016.04.22",
			"score" : 92
		},
		{
			"date" : "2016.04.29",
			"score" : 93
		}
	],
	"average" : 91.4,
	"studentId" : "T-23887"
}
{
	"_id" : 10786,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 97.4,
	"studentId" : "T-24124"
}
{
	"_id" : 10787,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
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
	"average" : 86.4,
	"studentId" : "T-41257"
}
{
	"_id" : 10788,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
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
			"score" : 94
		}
	],
	"average" : 89.6,
	"studentId" : "T-20224"
}
{
	"_id" : 10790,
	"gender" : "female",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 96.2,
	"studentId" : "T-12778"
}
{
	"_id" : 10795,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 96.2,
	"studentId" : "T-39428"
}
{
	"_id" : 10796,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 95.4,
	"studentId" : "T-23679"
}
{
	"_id" : 10797,
	"gender" : "female",
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
	"studentId" : "T-29509"
}
{
	"_id" : 10798,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 90
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 90
		}
	],
	"average" : 90.6,
	"studentId" : "T-37287"
}
{
	"_id" : 10799,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 97
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
	"average" : 89.4,
	"studentId" : "T-17222"
}
{
	"_id" : 10800,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 90
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 100
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 100
		}
	],
	"average" : 97.2,
	"studentId" : "T-21634"
}
{
	"_id" : 10802,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
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
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 84
		}
	],
	"average" : 87.8,
	"studentId" : "T-41165"
}
{
	"_id" : 10803,
	"gender" : "female",
	"county" : "bronx",
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
	"average" : 86.4,
	"studentId" : "T-23653"
}
{
	"_id" : 10804,
	"gender" : "female",
	"county" : "brooklyn",
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
			"score" : 99
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
	"average" : 95.8,
	"studentId" : "T-38864"
}
{
	"_id" : 10805,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 87
		},
		{
			"date" : "2016.04.08",
			"score" : 87
		},
		{
			"date" : "2016.04.15",
			"score" : 89
		},
		{
			"date" : "2016.04.22",
			"score" : 87
		},
		{
			"date" : "2016.04.29",
			"score" : 89
		}
	],
	"average" : 87.8,
	"studentId" : "T-26987"
}
{
	"_id" : 10806,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 96
		},
		{
			"date" : "2016.04.08",
			"score" : 85
		},
		{
			"date" : "2016.04.15",
			"score" : 85
		},
		{
			"date" : "2016.04.22",
			"score" : 85
		},
		{
			"date" : "2016.04.29",
			"score" : 85
		}
	],
	"average" : 87.2,
	"studentId" : "T-35975"
}
{
	"_id" : 10807,
	"gender" : "female",
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
	"average" : 94,
	"studentId" : "T-33160"
}
{
	"_id" : 10808,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 99
		},
		{
			"date" : "2016.04.08",
			"score" : 81
		},
		{
			"date" : "2016.04.15",
			"score" : 95
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 95
		}
	],
	"average" : 90.2,
	"studentId" : "T-38166"
}
{
	"_id" : 10809,
	"gender" : "female",
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
			"score" : 99
		},
		{
			"date" : "2016.04.22",
			"score" : 100
		},
		{
			"date" : "2016.04.29",
			"score" : 99
		}
	],
	"average" : 96.4,
	"studentId" : "T-28095"
}
{
	"_id" : 10810,
	"gender" : "female",
	"county" : "queens",
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
	"studentId" : "T-15695"
}
{
	"_id" : 10811,
	"gender" : "female",
	"county" : "queens",
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
	"studentId" : "T-40991"
}
{
	"_id" : 10812,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 85
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
	"average" : 85.8,
	"studentId" : "T-35492"
}
{
	"_id" : 10814,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 91
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
	"average" : 93,
	"studentId" : "T-37446"
}
{
	"_id" : 10816,
	"gender" : "female",
	"county" : "brooklyn",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 81
		},
		{
			"date" : "2016.04.08",
			"score" : 96
		},
		{
			"date" : "2016.04.15",
			"score" : 92
		},
		{
			"date" : "2016.04.22",
			"score" : 96
		},
		{
			"date" : "2016.04.29",
			"score" : 92
		}
	],
	"average" : 91.4,
	"studentId" : "T-24589"
}
{
	"_id" : 10818,
	"gender" : "female",
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
			"score" : 88
		},
		{
			"date" : "2016.04.22",
			"score" : 86
		},
		{
			"date" : "2016.04.29",
			"score" : 88
		}
	],
	"average" : 88,
	"studentId" : "T-38852"
}
{
	"_id" : 10820,
	"gender" : "female",
	"county" : "bronx",
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
			"score" : 96
		},
		{
			"date" : "2016.04.22",
			"score" : 81
		},
		{
			"date" : "2016.04.29",
			"score" : 96
		}
	],
	"average" : 90.2,
	"studentId" : "T-16201"
}
{
	"_id" : 10821,
	"gender" : "female",
	"county" : "queens",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 86
		},
		{
			"date" : "2016.04.08",
			"score" : 98
		},
		{
			"date" : "2016.04.15",
			"score" : 91
		},
		{
			"date" : "2016.04.22",
			"score" : 98
		},
		{
			"date" : "2016.04.29",
			"score" : 91
		}
	],
	"average" : 92.8,
	"studentId" : "T-15245"
}
{
	"_id" : 10822,
	"gender" : "female",
	"county" : "bronx",
	"exams" : [
		{
			"date" : "2016.04.01",
			"score" : 93
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
	"average" : 87,
	"studentId" : "T-22889"
}
{
	"_id" : 10823,
	"gender" : "female",
	"county" : "brooklyn",
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
	"average" : 94.4,
	"studentId" : "T-12647"
}

*/