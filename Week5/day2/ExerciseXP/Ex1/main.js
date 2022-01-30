// Using a DOM property, retrieve the h1 and console.log it.
//
// Using DOM methods, remove the last paragraph in the <article> tag.
//
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
//
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
//
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
//
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
//
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

console.log(document.getElementsByTagName('h1'));
let pArr = document.querySelectorAll('p');
pArr[pArr.length -1].remove();
console.log(pArr);
let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('click', (e) => h2.style.background = 'red');
let h3 = document.getElementsByTagName('h3')[0];
h3.addEventListener('click', function(){
  h2.style.display = 'none';
});
let button = document.createElement('button');
button.textContent = "Change paragraphes to Bold";
button.addEventListener('click', changeColorP);
document.body.appendChild(button);

function changeColorP () {
  let allP = document.querySelectorAll('p');
  for (var i = 0; i < allP.length; i++) {
    allP[i].style.fontWeight= 'bold';
  }
}

let h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('mouseover', (e) => h1.style.fontSize = `${Math.random()*101}px`);
