// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 6
let secondCard = 9

let sum = firstCard + secondCard
function play(){
    if (sum < 21){
    document.getElementById('dplay').textContent = "Do you want to draw another card?"
}else{
    document.getElementById('dplay').innerText = 'hellooooo'
}
}
