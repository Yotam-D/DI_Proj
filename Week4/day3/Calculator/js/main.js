function number(num){
  if (afterEqual) {
    calString = ``;
    afterEqual = false;
    console.log('afterEqual', afterEqual);
  }
  calString += num.toString();
  console.log(calString);
  document.getElementById("showString").innerHTML = calString;
}

function operator(operator){
  calString += ' ' + operator + ' ';
  document.getElementById("showString").innerHTML = calString;
}

function equal(){
  calString = eval(calString).toString();
  document.getElementById("showString").innerHTML = calString;
}


function clearString(){
  calString = calString.trim().slice(0,-1).trim();          // trimming before and after deleting last char in case of operator;
  if (calString.length == 0) {
    document.getElementById("showString").innerHTML = '0';
  }else {
    document.getElementById("showString").innerHTML = calString;
  }
}

function reset(){
  calString = ``;
  document.getElementById("showString").innerHTML = '0';
}


// Flow
document.getElementById("showString").innerHTML = '0';
let calString = ``;
let afterEqual = false;
