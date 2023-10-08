'use strict'

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let hasBlacjack = false
let isAlive = false
let sum = 0
let card = []
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let playerEl= document.getElementById("player-l")

let player={
    name: "David",
    age: 12,
}
playerEl.textContent += " Name: "+ player.name +" age :" + player.age

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 12) + 1
    
    if (randomNumber >= 11){
        return 10
    }else if(randomNumber === 1){
         return 11
    }else
    {
        return randomNumber
    }
}


function play(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame()
{
    cardsEl.textContent= "Cards: "
    for(let i = 0; i < card.length; i++)
    {
        cardsEl.textContent += card[i] + " "
    }
    sumEl.textContent = "Your Score: "+ sum
    //checkin whether the user has a blacjack 
    if (sum < 21){
    document.getElementById('dplay').textContent = "Do you want to draw another card? 😊"    
    } 
    else if(sum === 21){
    document.getElementById('dplay').innerText = 'hellooooo, you got a black jack✨🎉🎉'
    hasBlacjack = true
    }
    else{
            document.getElementById('dplay').textContent = "You are out of the game😢"
            isAlive = false
    }
    //checking whether the uplayer has won a blackjack and reward him/her
    if (hasBlacjack){
    document.getElementById('who').textContent = 'you won cash amounting to ksh 100,000'
    }
   
}

function drawaNew(){
    if(isAlive=== true && hasBlacjack === false)
    {
        let card3 = getRandomCard()
        card.push(card3) 
        sum += card3
        renderGame()
    }
    
}
