//EX1

  //change div id value to socialNetworkNavigation
let divEl = document.querySelector("div");
divEl.id = "socialNetworkNavigation";

  // create new li element "logout"
let newLi = document.createElement("li");
let LogoutTextNode = document.createTextNode("Logout")
newLi.appendChild(LogoutTextNode);
let ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);


  // get first and last element ul chilren's text content
let firstEl = ulElement.firstElementChild;
let lastEl = ulElement.lastElementChild;
  //logging first and last element ul chilren's text content
// console.log(firstEl.textContent);
// console.log(lastEl.textContent);



//Ex2
let uls = document.querySelectorAll("ul");
console.log(uls);
console.log(uls[1].lastElementChild.textContent = "Richard");
let greatingStudents = [];
uls.forEach((ul, i) => {
  ul.firstElementChild.textContent = 'Yotam';
  let tempNewEl = document.createElement("li")
  tempNewEl.textContent = "Hey Students";
  ul.appendChild(tempNewEl);
  console.log(ul);
});



//Ex3
document.getElementById("Ex3").style.backgroundColor = "blue";
document.getElementById("Ex3").style.padding = "20px";
let ex3Ul = querySelector()
