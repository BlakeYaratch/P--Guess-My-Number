//#region Iteration Code
var text = "";
var i = 0;

function looperino() {
  while (i <= 10) {
    text += "<br>The Number is: " + i;
    i++;
    console.log(text);
  }
  document.getElementById("demo").innerHTML = text;
}

function clearField() {
  document.getElementById("demo").innerHTML = "Something will pop up here.";
}
//#endregion
//#region Guess My Number
var totalGuesses = 5;
var score = 0;
var got = 5;
var miss = -2;
var x;
var correct = 0;
var bestScore = 0;
var playerGuessed= [ ]
document.getElementById("submitBtn").disabled = true;

function startFuntion() {
  totalGuesses = 5;
  document.getElementById("submitBtn").disabled = false;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.getElementById("yourLives").innerHTML = "Amount of lives: 5";
  playerGuessed= [ ]
  document.getElementById("numberGuessed").innerHTML="Numbers Guessed:"
}
function submitFuntion() {
  var x, text;
  x = document.getElementById("numb").value;

  if (x < 1 || x > 20) {
    text =
      "That's A Little Bit Too High There Bud, only input numbers between 1 & 20.";
    document.getElementById("response").innerHTML = text;
  } else if (x == randomNumber) {
    text = "Bingo";
    document.getElementById("response").innerHTML = text;
    document.getElementById("numberGuessed").innerHTML = "Number Guessed: " + x;
    document.getElementById("answer").innerHTML =
      "Correct Answer: " + randomNumber;
    score = score + got;
    document.getElementById("score").innerHTML = "Score: " + score;
    correct++;
    document.getElementById("numGamesPlayed").innerHTML =
      "Number of games guessed correctly: " + correct;
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("startBtn").disabled = false;
  } else if (x < randomNumber) {
    text = "Thats too low";
    document.getElementById("response").innerHTML = text;
    document.getElementById("numberGuessed").innerHTML = "Number Guessed: " + x;
    score = score + miss;
    document.getElementById("score").innerHTML = "Score: " + score;
    lives();
    document.getElementById("startBtn").disabled = true;
  } else if (x > randomNumber) {
    text = "Thats too high";
    document.getElementById("response").innerHTML = text;
    document.getElementById("numberGuessed").innerHTML = "Number Guessed: " + x;
    score = score + miss;
    document.getElementById("score").innerHTML = "Score: " + score;
    lives();
    document.getElementById("startBtn").disabled = true;
  } else {
    text = "No Letters Bud";
    document.getElementById("response").innerHTML = text;
    document.getElementById("numberGuessed").innerHTML = "Number Guessed: " + x;
    score = score + miss;
    document.getElementById("score").innerHTML = "Score: " + score;
  }

  if (totalGuesses <= 0) {
    alert("You Lost. Get Gud Kid.");
    document.getElementById("submitBtn").disabled = true;
  }
  if (correct >= 20) {
    endGame();
  }
  playerGuessed.push(x)
  document.getElementById("numberGuessed").innerHTML="Number Guessed: " + playerGuessed
}

//#endregion
//#region lives
function lives() {
  if (x != randomNumber) {
    totalGuesses--;
    console.log("Guesses Left " + totalGuesses);
  }
  document.getElementById("yourLives").innerHTML =
    "Amount of lives: " + totalGuesses;
}

//#endregion
//#region endGame
function endGame() {
  document.getElementById("answer").innerHTML = "Correct Answer: 👀🤐";
  document.getElementById("yourLives").innerHTML = "Amount of lives: ";
  document.getElementById("score").innerHTML = "";
  document.getElementById("numGamesPlayed").innerHTML =
    "Number of games guessed correctly: ";
  document.getElementById("numberGuessed").innerHTML = "Number Guessed:";
  totalGuesses = 5;


  score = 0;
  correct = 0;
  highScore()
}

//#endregion

//#region restartFunction

function restartFuntion(){
  
  document.getElementById("startBtn").disabled = false;
  document.getElementById("submitBtn").disabled = true;

  document.getElementById("answer").innerHTML = "Correct Answer: 👀🤐";
  document.getElementById("yourLives").innerHTML = "Amount of lives: ";
  document.getElementById("score").innerHTML = "";
  document.getElementById("numGamesPlayed").innerHTML =
    "Number of games guessed correctly: ";
  document.getElementById("numberGuessed").innerHTML = "Number Guessed:";
  totalGuesses = 5;


  score = 0;
  correct = 0;

}

//#endregion

//#region bestScore

function highScore(){
  if (score > bestScore) {
    bestScore = score;
    document.getElementById("highScore").innerHTML = "High Score: " + bestScore;
    alert("New High Score! " + bestScore);
  } else {
    alert("You did not get a new High Score :( " + score);
  }
}

//#endregion
