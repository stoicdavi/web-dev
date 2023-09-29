'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('Current class name\t' + className)
});

let cartIcone = document.querySelector('.cart-icon');
let cart = document.querySelector('.caat');
let closeCart = document.querySelector('.close-cart');

cartIcone.onclick = () => {
    cart.classList.add('active'); // Toggle the "active" class
};

cartIcone.onclick = () => {
    cart.classList.remove('active'); // Toggle the "active" class
};

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}
function ready(){
    var removeCartButtons =document.getElementsByClassName('removecart')
    console.log(removeCartButtons)
    for (var i = 0;i < removeCartButtons.length; i++){
        var cartBox = cartBoxes[1]
        var priceElement =cartBox.getElementsByClassName('class-price')[0]
    }
}