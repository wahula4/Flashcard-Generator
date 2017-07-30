var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.json");
var counter = 0;
var score = 0;

// cloze card constructor
function ClozeCard(partial, cloze){
  this.partial = partial + "...";
  this.cloze = cloze;
  this.fullText = partial + " " + cloze;
};

var askQuestions = function (){
    // if there are questions remaining, continue asking them
  if(counter < clozeQuestions.length){

  inquirer.prompt([

    {type: "input",
      message: clozeQuestions[counter].partial + "...",
      name: "question"
      }
    ]).then(function(answer){

    var userInput = answer.question.toLowerCase();

    if(userInput === clozeQuestions[counter].cloze){
          console.log("Correct!");
          score++;
        }

        else{
          console.log("Wrong!");
          console.log(clozeQuestions[counter].fullAnswer);
        }

    counter++
    askQuestions();

    });//closing then
  } //closing if

  else{
    console.log("Game Over!")
    console.log("Correct Answers: " + score);
    inquirer.prompt([

        {type: "confirm",
          message: "Do you want to play again?",
          name: "startOver",
          default: true
          }
      ]).then(function(answer){

        if (answer.startOver === true){
          counter = 0;
          score = 0;
          askQuestions();
        }
        else{
          console.log("Better luck next time!");
        }
    });
  }
};

askQuestions();
