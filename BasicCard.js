// dependency for inquirer npm package
var inquirer = require("inquirer");
// constructor function used to create question objects
function BasicFlash(question, answer) {
  this.question = question;
  this.answer = answer;
}
// creates the printInfo method and applies it to all question objects
BasicFlash.prototype.printInfo = function() {
  console.log("Question: " + this.question + "\nAnswer: " + this.answer);
  console.log("---------------");
};
// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new question objects
var questionArray = [];
var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 2) {
    console.log("NEXT QUESTION");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "q",
        message: "What is the question?"
      }, {
        name: "a",
        message: "What is the answer?"
      }
    ]).then(function(answers) {
      // initializes the variable newQuestion to be a question object which will
      // take in all of the user's answers to the questions above
      var newQuestion = new BasicFlash(
        answers.q,
        answers.a);
      // pushes newQuestion object into our array
      questionArray.push(newQuestion);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var i = 0; i < questionArray.length; i++) {
      questionArray[i].printInfo();
    }
  }
};
// call askQuestion to run our code
askQuestion();

// module.exports = BasicCard;
