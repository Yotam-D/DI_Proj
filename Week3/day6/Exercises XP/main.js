//Ex1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift(); // removing first item
console.log(people);
people[2] = "Jason";  // changing 3rd item "James" to "Jason"
console.log(people);
people.push('Yotam');  // adding my name "Yotam" to the array
console.log(people);
console.log(people.indexOf('Mary')); // logging index of "Mary"
newPeople = people.slice(1,-1); // Creatin a new array 'newPeple' that inclused people elements without the first and last elements.
console.log(newPeople);
console.log(newPeople.indexOf('Foo')); // logging index of "Foo"
let last = newPeople[newPeople.length - 1];  //create an element that gets the last element of newPeople array;
console.log(last);
people.forEach((item, i) => {
  console.log(item);
});
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Jason") {break;}
}





//Ex2
let colors = ['green', 'yellow', 'blue', 'orange'];
colors.forEach((item, i) => {
  console.log('my ' + (i+1) + "# choice is " + item);
});
let suffix = ['st', 'nd', 'rd', 'th'];
colors.forEach((item, i) => {
  console.log('my ' + (i+1) + suffix[i] + " choice is " + item);
});



//Ex3
let inputNum = prompt("please enter a number");
console.log(inputNum, typeof inputNum);
while (inputNum !== "10"){
  inputNum = prompt("please enter another number");
  console.log(inputNum, typeof inputNum);
}


//Ex4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors); // log num of floors
console.log("Number of apartments in floor 1:" + building.numberOfAptByFloor.firstFloor);
console.log("Number of apartments in floor 3:" + building.numberOfAptByFloor.thirdFloor);
console.log("the second tenant is: "+ building["nameOfTenants"][1] + " which has " + building.numberOfRoomsAndRent[building["nameOfTenants"][1].toLowerCase()][0]+ " rooms");
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1] ) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);


//Ex5

let family = {
  numOfPeople : 6,
  Father : "Yuval",
  Mother : "Ofri",
  Syblings : ["Noa", "Aya", "Yotam", "Naama"]
}
for (var key in family) {
  console.log(`${key}`);
}
for (var key in family) {
  console.log(`${family[key]}`);
}


//Ex6

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
let detaiesString = '';
for (var key in details) {
  detaiesString += `${key} ${details[key]} `
}
console.log(detaiesString);


//Ex7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let SecretName = '';
names.sort().forEach((item, i) => {
  SecretName += item[0];
});
console.log(SecretName);
