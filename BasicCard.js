// dependency for inquirer npm package
var inquirer = require("inquirer");
var basicQuestions = require("./log.json");
var counter = 0;
var correctAnswerCount = 0;

function ClozeCard(question, answer){
  this.question = question;
  this.answer = answer;
};

var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].question,
      name: "question"
      }//if
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].answer){
          console.log("Correct!");
          correctAnswerCount++;
        }//if

        else{
          console.log("Wrong!");
          console.log(basicQuestions[counter].answer);
        }//else

  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("Game Over!")
  console.log("Correct Answers: " + correctAnswerCount);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();
