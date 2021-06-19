var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function rollDie() {
  var randomNum1 = Math.floor(Math.random() * 6);
  document.getElementById("img1").src = diceImages[randomNum1];

  var randomNum2 = Math.floor(Math.random() * 6);
  document.getElementById("img2").src = diceImages[randomNum2];

  if (randomNum1 === randomNum2) {
    document.getElementById("header1").innerHTML = "Draw!";
  }
  else if(randomNum1 > randomNum2) {
    document.getElementById("header1").innerHTML = "Player 1 Wins!";
  }
  else if(randomNum2 > randomNum1) {
      document.getElementById("header1").innerHTML = "Player 2 Wins!";
  }

}
