// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
//
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 0;
const VAT = 0.17;
let details = ["+200", "-100", "+146", "+167", "-2900"]


function Calculate (StrArray) {
  let numArr = [];
  StrArray.forEach((item, i) => {

  // make each array element integer according to it's first char
  let currNum = item.substring(1)
  currNum = (item[0] === '-') ? -1 * parseInt(currNum) : parseInt(currNum)
  
  bankAmount += currNum;
  });
  return bankAmount;
}

console.log(Calculate(details));
