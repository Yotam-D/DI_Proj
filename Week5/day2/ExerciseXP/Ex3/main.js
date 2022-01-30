// Create a global variable named allBoldItems.
//
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
//
// Create a function called highlight() that changes the color of all the bold text to blue.
//
// Create a function called return_normal() that changes the color of all the bold text back to black.
//
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look a

let allBoldItems;
let pElement = document.querySelector('p');
pElement.addEventListener('mouseover', highlight);
pElement.addEventListener('mouseout', return_normal);
console.log(pElement);
console.log('here');

function getBold_items () {
  allBoldItems = document.querySelectorAll('strong')
}

function highlight () {
  console.log('here2');
  getBold_items();
  for (var i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = 'blue';
  }
}

function return_normal (e) {
  getBold_items();
  for (var i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = 'black';
  }
}
