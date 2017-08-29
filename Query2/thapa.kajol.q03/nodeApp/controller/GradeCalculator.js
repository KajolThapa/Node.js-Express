
function calculateGrade(myScore) {


     var letterGrade = " " ;

      if (myScore >= 90  && myScore <=100) {
        letterGrade= "A";
      } else if (myScore >=80 && myScore <=89) {
        letterGrade= "B";
      } else if (myScore >= 70 && myScore <=79) {
       letterGrade= "C";
      } else if (myScore >= 65 && myScore <=69) {
        letterGrade= "D";
      } else if (myScore >= 0  && myScore <=64) {
        letterGrade= "F";
      } else {
        letterGrade= "Invalid score, Enter score from 0 - 100.";
      }
      
      return letterGrade;
 }

  var exports = module.exports = {};
  exports.calculateGrade = calculateGrade;
  
