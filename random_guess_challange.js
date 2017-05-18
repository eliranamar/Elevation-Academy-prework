var randomNum = Math.floor((Math.random()*6));
var guesses = 0;

function guess(num) {
  if (num === randomNum) {
    console.log("you guessed the random number with " + guesses + " guesses");
  } else {
    guesses++;
    console.log("keep guessing");
  }
}
 var user = parseInt(prompt("Enter a number between 0-5"));

guess(user);
