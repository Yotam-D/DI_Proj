// Create an array using forEach that contains all the usernames from the gameInfo
// array, add an exclamation point (ie. “!”) to the end of every username.
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let usersArr = [];
gameInfo.forEach((obj, i) => {
  usersArr.push(obj['username']+'!');
});
console.log(usersArr);

let usersArrAbove = [];
gameInfo.forEach((obj, i) => {
  usersArrAbove.push ((obj['score'] > 5) ? (obj['username']+'!') : false)
});
usersArrAbove = usersArrAbove.filter(Boolean)
console.log(usersArrAbove);

let TotalScore = 0;
gameInfo.forEach((obj, i) => {
  TotalScore += parseInt(obj['score'])
});
alert('the total score is:' + TotalScore)
