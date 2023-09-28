let count = 0;
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countN = document.getElementById("coun-number")
let saveEl = document.getElementById("save-El")
let Cls = document.getElementById("clear1")
function increment()
{
    count += 1;
    countN.innerText = count
}

function save(){
    let countStr = count + "  -  "
    console.log(count)
    saveEl.textContent += countStr
    countN.innerText = 0
    count = 0
}
function clear(){
        count = 0;
        countN.innerText = 0;
        saveEl.textContent = "";
}