// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
let str = '';
color.forEach((item, i) => {
  let suffix = (i > 2) ? ordinal[0] : ordinal[i + 1]
  str += `${i+1}${suffix} choice is ${item}.` + '\n'
});
console.log(str);
