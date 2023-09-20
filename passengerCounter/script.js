let count = 0;
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countN = document.getElementById("coun-number")
let saveEl = document.getElementById("save-El")
function increment()
{
    count += 1;
    countN.innerText = count
}
function save(){
    let countStr = count + "  -  "
    console.log(count)
    saveEl.textContent += countStr
}
