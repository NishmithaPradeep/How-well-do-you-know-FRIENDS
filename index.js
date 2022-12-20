var readline = require("readline-sync");
var score = 0;
var userName = readline.question("What is your Name ?");
console.log("Let's play to know how much you F.R.I.E.N.D.S !!");
console.log("-----------------");


  var question1 = {
  question : "How many times Ross gets divorced (answer in number) ?",
  answer : "3"
}
var question2 = {
  question : "Monica dated an ophthalmologist named?",
  answer : "Richard"
}
var question3 = {
  question : "Ross says whose name at the altar in London?",
  answer : "Rachel"
}
var question4 = {
  question : "Monica categorizes her towels into how many categories (answer in number)?",
  answer : "11"
}
var question5 = {
  question : "What is the name of Joey's stuffed penguin?",
  answer : "hugsy"
}
var friendsArray = [question1 , question2 , question3 , question4 , question5];

function letsPlay(que,ans)
{
  
      var currentAnswer = readline.question(que);
      if(currentAnswer.toUpperCase() === ans.toUpperCase())
      {
        console.log("Yaaayy ! you are right !!!");
        score = score + 1;
      }
      else
      {
        console.log("You are wrong");
      }
      console.log("-----------------");
    
}

for(var i=0;i<friendsArray.length;i++)
  {
    letsPlay(friendsArray[i].question,friendsArray[i].answer);
  }
console.log(userName+ "...you scored " + score + "/5");

