"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector(".score").textContent = score;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  //   When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    score++;
    document.querySelector(".score").textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  }

  //   When guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☠ You Lost The Game!");
    }
  }
});

document.querySelector(".high-score").textContent = score;

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
