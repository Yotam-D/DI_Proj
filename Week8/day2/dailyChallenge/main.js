let obj = {};

// forEach((item, i) => {
//
// });

let inputArr = document.querySelectorAll('input');
let submitBtn = document.querySelector('#subBtn')
console.log(submitBtn);
function updateObject() {
  console.log(e);
  inputArr.forEach((item, i) => {
    if (item.value !== 'Send') {
      obj[item.name] = item.value;
      let objJson = JSON.stringify(obj)
      console.log(objJson);
    }
  });
}





// function reqListener () {
//   console.log(this.responseText);
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();
