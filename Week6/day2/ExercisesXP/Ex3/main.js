// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

let isString = (arg) => {return (typeof(arg) === "string")}

console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false
