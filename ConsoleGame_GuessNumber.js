/*From: https://www.educative.io/courses/learn-nodejs-complete-course-for-beginners/7X0nMBL4xj8
We want to create a random number guessing game. The way it works is that the game generates a random number from 1 to 10, and the player must try to guess it in 3 tries or less.

Here’s what you will have to do:

Generate a random number.
Take the player’s input from the console.
Compare the player’s guess with the generated number and check if:
The number of remaining tries is more than 0. If so, the player can continue guessing if they are wrong.
The player has won.
The player has lost.
If the player has tries left, output TOO HIGH or TOO LOW to the console depending on their guess.
If the player has won, output WINNER to the console.
If the player has lost, output YOU LOSE! THE NUMBER WAS: X to the console, where X is the randomNumber.

const readline = require("readline");*/

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum and minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// We want the player to have 3 tries
let tries = 3;

// We want to player to guess numbers from 1 to 10
let randomNumber = getRandomIntInclusive(1, 10);

rl.setPrompt("Guess the number! (1-10): ");
rl.prompt();
rl.on("line", function (answer) {
  tries--;
  game(tries, randomNumber, answer);
  rl.prompt();
});

function game(tries, randomNumber, guess) {
  
  //WINNER 
  if(guess == randomNumber){
    console.log('WINNER');
    process.exit();
  }else{
    if(tries == 0){// LOSE
      console.log('YOU LOSE! THE NUMBER WAS: ' + randomNumber);
      process.exit();
    }else{
      // TOO HIGH
      if(guess > randomNumber) console.log('TOO HIGH');
      // TOO LOW
      else console.log('TOO LOW');
    }
  }
}
