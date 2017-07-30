var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.json");
var counter = 0;
var correctAnswerCount = 0;

function ClozeCard(partial, cloze){
  this.cloze = cloze;
  this.partial = partial + "...";
  this.fullText = partial + " " + cloze;
  this.returnCloze = function(){
    console.log("Answer: " + this.cloze);
};
  this.returnPartial = function(){
  console.log(this.partial);
};
  this.returnFullText = function(){
  console.log(this.fullText);

};

};

var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: clozeQuestions[counter].partial + "...",
      name: "question"
      }//if
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === clozeQuestions[counter].cloze){
          console.log("Correct!");
          correctAnswerCount++;
        }//if

        else{
          console.log("Wrong!");
          console.log(clozeQuestions[counter].fullAnswer);
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
