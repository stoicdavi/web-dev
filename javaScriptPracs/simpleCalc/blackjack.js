'use strict'
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 6
let secondCard = 9
let hasBlacjack = false
let isAlive = true

let sum = firstCard + secondCard
function play()
{
    //checkin whether the user has a blacjack 
    if (sum < 21){
    document.getElementById('dplay').textContent = "Do you want to draw another card? 😊"
    document.querySelector("#sum").textContent = "Your Score: "+ sum//using query selector instead of getElementById
    isAlive = true
    } 
    else if(sum === 21){
    document.getElementById('dplay').innerText = 'hellooooo, you got a black jack✨🎉🎉'
    document.getElementById("sum").textContent = "Your Score: "+ sum
    hasBlacjack = true
    isAlive = false
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

    if (isAlive){
        document.getElementById('alive').textContent = "you are still alive"
    }
    else{
        document.getElementById('alive').textContent = 'You are done!'
    }
}

