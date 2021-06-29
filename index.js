//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores) {
    // scores - an array of test scores
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  //Create an addScore method in CrewCandidate. The function must take a new score as a parameter. Code this function OUTSIDE of constructor. (If you need to review the syntax, revisit Assigning Class Methods).

  addScore(newScore) {
    // When passed a score, the function adds the value to this.scores with the push array method.
    this.scores.push(newScore);
  }

  // Add an average() method outside constructor. The function does NOT need a parameter.
  average() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }
    return Math.round(total / this.scores.length * 10) / 10;
  }

  //Add a status() method to CrewCandidate. The method returns a string (Accepted, Reserve, Probationary, or Rejected) depending on a candidate's average.
  status() {
    let average = this.average();
    if(average > 90){
      return "Accepted";
    } else if (average >= 80) {
      return "Reserve"
    } else if (average >= 70){
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}

/*
Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.
*/

let candidate1 = new CrewCandidate("Bubbs Bear", 135, [88, 85, 90]);
candidate1.addScore(83);
console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}.`)
let candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
console.log(`${candidate2.name} earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status()}.`)
let candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(`${candidate3.name} earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status()}.`)


let testsToReserve = 0;
let testsToAccepted = 0;

while (candidate3.status() !== "Accepted") {
  if (candidate3.status() === "Probationary") {
    testsToReserve += 1;
  }
  testsToAccepted += 1;
  candidate3.addScore(100);
}

console.log("Tests til Reserve: " + testsToReserve);
console.log("Tests til Accepted: " + testsToAccepted);
// console.log(candidate1.scores);
// console.log(candidate2);
// console.log(candidate3);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.