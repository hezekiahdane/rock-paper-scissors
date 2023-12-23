const computerDisplay = document.getElementById('computer')
const userDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>  {
    userChoice = e.target.id 
    userDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw!"
    }else if(computerChoice === 'rock' && userChoice == 'scissors'){
        result = "You lose!"
    }else if(computerChoice === 'scissors' && userChoice == 'rock'){
        result = "You win!"
    }else if(computerChoice === 'paper' && userChoice == 'rock'){
        result = "You lose!"
    }else if(computerChoice === 'rock' && userChoice == 'paper'){
        result = "You win!"
    }else if(computerChoice === 'scissors' && userChoice == 'paper'){
        result = "You lose!"
    }else if(computerChoice === 'paper' && userChoice == 'scissors'){
        result = "You win!"
    }
    resultDisplay.innerHTML = result
}