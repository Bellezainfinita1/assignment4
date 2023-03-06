function getUserChoice() {
    var userChoice = prompt("Choose rock, paper or scissors");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
    } else {
      alert("Invalid choice. Please choose rock, paper or scissors.");
      return getUserChoice();
    }
  }
  
  function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      return "rock";
    } else if (computerChoice === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "tie";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return "user";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      return "user";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "user";
    } else {
      return "computer";
    }
  }
  
  function playGame() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    var winner = determineWinner(userChoice, computerChoice);
    if (winner === "tie") {
      alert("It's a tie!");
    } else {
      alert("The winner is " + winner + "!");
    }
  }
  
  playGame();