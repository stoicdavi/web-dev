'use strict'

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 6
let secondCard = 9
let card = [firstCard, secondCard]
let hasBlacjack = false
let isAlive = true
let thirdNumber = 6
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementsByClassName("sum")
let cardsEl = document.getElementById("cards")

let sum = firstCard + secondCard 
function play(){
    renderGame()
}
function renderGame()
{
    //checkin whether the user has a blacjack 
    if (sum < 21){
    cardsEl.textContent= "Cards: " + card[0] +" "+ card[1]
    document.getElementById('dplay').textContent = "Do you want to draw another card? 😊"
    document.querySelector("#sum").textContent = "Your Score: "+ sum//using query selector instead of getElementById
    isAlive = true
   
    } 
    else if(sum === 21){
    document.getElementById('dplay').innerText = 'hellooooo, you got a black jack✨🎉🎉'
    document.getElementById("sum").textContent = "Your Score: "+ sum
    hasBlacjack = true
    isAlive = false
    cardsEl.textContent= "Cards: " + firstCard +" "+ secondCard
    }
    else{
            document.getElementById('dplay').textContent = "You are out of the game😢"
            document.getElementById("sum").textContent = "Your Score: "+ sum
            isAlive = false
    }
    //checking whether the uplayer has won a blackjack and reward him/her
    if (hasBlacjack){
    document.getElementById('who').textContent = 'you won cash amounting to ksh 100,000'
    }
    else{
        document.getElementById('who').textContent = 'no Win'
    }

    if (isAlive){
        document.getElementById('alive').textContent = "you are still alive"
    }
    else if(isAlive && hasBlacjack){
        document.querySelector('#alive').textContent = "You Won!"
    }
    else{
        document.getElementById('alive').textContent = 'You are done!'
    }
}

function drawaNew(){
    play();
    sum += thirdNumber
    document.getElementById('cards').textContent= "Cards: " + card[0] +" "+ card[1] +" "+ thirdNumber
}
