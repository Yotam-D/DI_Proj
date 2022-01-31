// Retrieve the form and console.log it.
//
// Retrieve the inputs by their id and console.log them.
//
// Retrieve the inputs by their name attribute and console.log them.
//
// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.


let form = document.querySelector('form');
console.log(form);

let inputFname = document.querySelector('#fname');
let inputLname = document.querySelector('#lname');
console.log(inputFname);
console.log(inputLname);

let inputFnameByAttribute = document.querySelector('input[name = "fname"]');
let inputLnameByAttribute = document.querySelector('input[name = "lname"]');
console.log(inputFnameByAttribute);
console.log(inputLnameByAttribute);

let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', putInList);

function putInList(e) {
  e.preventDefault();
  console.log('here');
  let fName = inputFname.value;
  let lName = inputLname.value;
  if (fName.length > 0 && lName.length > 0) {
    let li = document.createElement('li');
    li.innerText = `${fName} ${lName}`;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
  }
}
