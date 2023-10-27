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
})


//Search bar
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Toggle the display based on input value
    ul.style.display = filter ? 'block' : 'none';

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  