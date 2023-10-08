'use strict'

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let card = [firstCard, secondCard]
let hasBlacjack = false
let isAlive = true
let sum = firstCard + secondCard 
let thirdNumber = 6
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 12) + 1
    return randomNumber
}


function play(){
    renderGame()
}
function renderGame()
{
    //checkin whether the user has a blacjack 
    if (sum < 21){
    cardsEl.textContent= "Cards: "
    for(let i = 0; i < card.length; i++)
    {
        cardsEl.textContent += card[i] + " "
    }
    document.getElementById('dplay').textContent = "Do you want to draw another card? 😊"
    sumEl.textContent = "Your Score: "+ sum//using query selector instead of getElementById
    isAlive = true
   
    } 
    else if(sum === 21){
    document.getElementById('dplay').innerText = 'hellooooo, you got a black jack✨🎉🎉'
    sumEl.textContent = "Your Score: "+ sum
    hasBlacjack = true
    isAlive = false
    cardsEl.textContent= "Cards: " + firstCard +" "+ secondCard
    }
    else{
            document.getElementById('dplay').textContent = "You are out of the game😢"
            sumEl.textContent = "Your Score: "+ sum
            isAlive = false
    }
    //checking whether the uplayer has won a blackjack and reward him/her
    if (hasBlacjack){
    document.getElementById('who').textContent = 'you won cash amounting to ksh 100,000'
    }
   
}

function drawaNew(){
    let card3 = getRandomCard()
    card.push(card3) 
    sum += card3
    renderGame()
    
}
