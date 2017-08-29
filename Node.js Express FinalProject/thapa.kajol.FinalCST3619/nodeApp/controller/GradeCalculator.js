//FileName: GradeCalculator.js


function getGrade(inputvalue) {
    

     var lettergrade = " " ;

      if (inputvalue >= 90  && inputvalue <=100) {
        lettergrade= "A";
      } else if (inputvalue >=80 && inputvalue <=89) {
        lettergrade= "B";
      } else if (inputvalue >= 70 && inputvalue<=79) {
       lettergrade= "C";
      } else if (inputvalue >= 65 && inputvalue <=69) {
        lettergrade= "D";
      } else if (inputvalue >= 0  && inputvalue <=64) {
        lettergrade= "F";
      } else {
        lettergrade= "Invalid score, Enter score from 0 - 100.";
      }
      
      return lettergrade;
    }

    function getRemark(inputvalue) {
    

     var lettergrade= " " ;

      if (inputvalue >= 90  && inputvalue <=100) {
        lettergrade= "Excellent";
      } else if (inputvalue>=80 && inputvalue <=89) {
        lettergrade= "Good";
      } else if (inputvalue >= 70 && inputvalue <=79) {
       lettergrade= "Average";
      } else if (inputvalue >= 65 && inputvalue <=69) {
        lettergrade= "Passing";
      } else if (inputvalue >= 0  && inputvalue <=64) {
       lettergrade = "Failed";
      } else {
        lettergrade = "Invalid score, Enter score from 0 - 100.";
      }
      
      return lettergrade;
    }

    function getMidterm(inputvalue) {
    

     var midtermEval= " " ;

      if (inputvalue >= 0  && inputvalue <=64) {
        midtermEval = "failing";
      } else if (inputvalue>=65 && inputvalue <=100) {
        midtermEval= "passing";
      } else {
        midtermEval = {error:"Invalid Number or character"};
      }
      
      return midtermEval;
    }


   function getAge(year) {

      var currentYear = 2017;
      var age = currentYear-year;
      return age;

    }

var exports = module.exports = [];
exports.getGrade = getGrade;
exports.getAge = getAge;
exports.getRemark = getRemark;
exports.getMidterm = getMidterm;
