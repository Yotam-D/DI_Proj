// Ex1
let oneLine = (a, b) => a + b
console.log('Ex1:',oneLine(7, 9))


// Ex2
//
let kgToGrams1 = function(weightK) {
  return weightK * 1000
}
console.log('Ex2:', kgToGrams1(6));
//declaration
function kgToGrams2(weightK) {
  return weightK * 1000
};
console.log('Ex2:', kgToGrams2(7));
// one-line arrow function
let kgToGrams3 = weightK => weightK * 1000;
console.log('Ex2:', kgToGrams3(8));



// Ex3
(function familyInfo(numChild, partnerName, location, job) {
  let p = document.createElement('p')
  p.textContent = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numChild} kids.`
  document.body.appendChild(p);
})(4, "Anna", "Madrid", "Chef");


// Ex4
(function createDiv(userName) {
  let newDiv = document.createElement('div')
  newDiv.textContent = userName
  newDiv.classList.add("text-light")
  let navBar = document.querySelector('nav')
  navBar.appendChild(newDiv)
})("Moti");


// Ex5
function makeJuice(size) {
  let ingredients = [];
  let p = document.createElement('p')
  function addIngredients(firstI, secondI, thirdI) {
    ingredients.push(firstI, secondI, thirdI);
    let ingStr ='';
    ingredients.forEach((item, i) => ingStr += `${item}${i < ingredients.length -1 ? ", ": "."}`);
    p.textContent = `The client wants a ${size} juice, containing ` + ingStr;
  }
  addIngredients('Banana', 'Mango', 'Apple');
  addIngredients('Chocolate', 'Honey', 'Ice Cream');
  document.body.appendChild(p)
}
makeJuice("Large");
