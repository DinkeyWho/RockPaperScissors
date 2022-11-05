let playerScore = 0
let compScore = 0

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * arrOfChoices.length)
  return arrOfChoices[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'You tied! You both picked ${playerSelection}'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    return 'You lost! Rock crushes scissors!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You won! Scissors cuts paper!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    return ' You lost! Paper covers rock!'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You won! Rock crushes scissors!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    return 'You lost! Scissors cuts paper!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You won! Rock crushes scissors!'
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Select your choice', 'Rock, Paper, Scissors').toLowerCase()
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
  }

  if (playerScore > compScore) {
    return 'You win! You beat the computer!'
  } else if (playerScore < compScore) {
    return 'You lose! You got beat by the computer!'
  } else {
    return 'You tied with the computer! Better luck next time.'
  }
}

console.log(game())




// PseudoCode

// Get Computer's choice between Rock Paper Scissors
// Get Player to input Rock Paper Scissors
// Compare the two
// Rock > Scissors > Paper > Rock
// Keep track of scores from both sides, first to 5 wins
