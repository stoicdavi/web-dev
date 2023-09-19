let count = 0;
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment()
{
    count += 1;
    document.getElementById("number").innerText = count;
}
function save(){
    console.log("Result Saved")
}