// dependency for inquirer npm package
var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json"); // to access questions and answers
var counter = 0; // question counter starts at 0
var score = 0; // correct answers starts at 0

// basic card constructor
function BasicCard(question, answer){
  this.question = question;
  this.answer = answer;
};

var askQuestions = function (){
  // if there are questions remaining, continue asking them
  if(counter < basicQuestions.length){

  inquirer.prompt([
    // ask question for each object in the array
    {type: "input",
      message: basicQuestions[counter].question,
      name: "question"
      }
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].answer){
          console.log("Correct!");
          score++;
        }

        else{
          console.log("Wrong!");
          console.log(basicQuestions[counter].answer);
        }

  counter++; // increment to the next question
  askQuestions(); // run the askQuestions function

  });//closing then
} //closing if

else{
  console.log("Game Over!")
  console.log("Correct Answers: " + score);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "startOver",
        default: true  // if nothing is entered, start game over
        }
    ]).then(function(answer){

      if (answer.startOver === true){
        counter = 0;
        score = 0;
        askQuestions();  // start game over by running askQuestions function
      }
      else{
        console.log("Better luck next time!");
      }
  });
}

}; //closing function

askQuestions();  // initiate the game
