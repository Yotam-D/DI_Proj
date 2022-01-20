

//Ex1
function infoAboutMe(){
  console.log("I live in Jerusalem");
};

// infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor){
  console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
};

// calling functions
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");




//Ex2
function calculateTip(){
  let bill = parseInt(prompt("how much for the bill?"));
  let tip = bill*0.1;
  if (bill < 50) {
    tip = bill*0.2;
  } else if (bill >=50 && bill <=200) {
    tip = bill*0.15;
  }
  let totalAmount = tip+bill;
  console.log(`tip: ${tip} \ntotal bill: ${totalAmount}`);
};

//calling function
// calculateTip();

//Ex3
function isDivisible(divisor = 23){
  let sum = 0;
  for (var i = 0; i <= 500; i++) {
    if (i % divisor == 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
}

// calling function
// isDivisible();
// isDivisible(4);


// Ex4
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList = ['banana', 'orange', 'apple'];

function myBill(){
  let bill = 0;
  shoppingList.forEach((item) => {
  if (stock[item] !== 0) {        //checks if item in stock
    bill += prices[item];
    stock[item]--;
  }
  });
  return bill;
}

// calling function
// console.log(myBill());


// Ex5
function changeEnough(itemPrice, amountOfChange){
  if (sumChange(amountOfChange) >= itemPrice) {    //**check change is bigger the price//
    return true;
  }
  return false;
}

function sumChange(amountOfChange)
{
  return (amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1+
          amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01);
}

// calling functions
// console.log(changeEnough(14.11, [2,100,0,0]));
// console.log(changeEnough(0.75, [0,0,20,5]));


// Ex6
function hotelCost(){
  let numNights = parseInt(prompt("how many nights do you want to stay?"));
  while (isNaN(numNights)) {
    numNights = prompt("please enter a valid number");
  }
  return numNights*140;     //return total cost of the hotel
}

function planeRideCost(){
  let destination = prompt('where to?');
  let price = 300;
  while (!isNaN(parseInt(destination))) {
    destination = prompt("please enter a valid destination");
  }
  if (destination == "London") {
    price = 183;
  } else if (destination == "Paris") {
    price = 220;
  }
  return price;
}

function rentalCarCost(){
  let rentDays = parseInt(prompt('how many days with the car?'));
  while (isNaN(rentDays)) {
    rentDays = prompt("please enter a valid number");
  }
  let rentPrice = rentDays*40;
  if (rentDays>10) {
    rentPrice *= 0.95     // 5% discount
  }
  return rentPrice;
}

function totalVacationCost(){
  let hotelsCost = hotelCost();
  let carCost = rentalCarCost();
  let tickectsCost = planeRideCost();
  return `The car cost: ${carCost} \n the hotel cost: ${hotelsCost} \n the plane tickets cost: ${tickectsCost}.`;
}

console.log(totalVacationCost());
