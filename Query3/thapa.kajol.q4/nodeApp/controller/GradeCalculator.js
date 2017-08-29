
var MongoClient = require('mongodb').MongoClient;


function calculateGrade(average, callback) {
     MongoClient.connect('mongodb://localhost:27017/examsdb', function(err, db) {
      console.log({error:err});

     var letterGrade = " " ;

      if (average >= 90  && average <=100) {
        letterGrade= "A";
      } else if (average >=80 && average <=89) {
        letterGrade= "B";
      } else if (average >= 70 && average <=79) {
       letterGrade= "C";
      } else if (average >= 65 && average <=69) {
        letterGrade= "D";
      } else if (average >= 0  && average <=64) {
        letterGrade= "F";
      } else {
        letterGrade= "Invalid score, Enter score from 0 - 100.";
      }
      
      callback(letterGrade);
    }

  )};

  
var exports = module.exports =[];
exports.grade = calculateGrade;
  
