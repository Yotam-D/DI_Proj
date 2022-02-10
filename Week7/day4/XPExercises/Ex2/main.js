// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.

function displayStudentInfo(studentObject) {
  let {first,last} = studentObject;
  console.log(`Your full name is ${first} ${last}`);
}
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:


displayStudentInfo({first: 'Elie', last:'Schoppik'})
// output : 'Your full name is Elie Schoppik'`
