function playTheGame(){                     // check user input and creates a random computer num between 0-10;
  if(!confirm('would you like to play a game?')){
    alert('No problem Godbye')
    return;
  };

function test(userNumber,computerNumber){     //
  for (var i = 0; i < 3; i++) {               // user have 3 tries
    if (userNumber > computerNumber) {
      userNumber = parseInt(prompt("too Big guess again:"))
    }
    else if (userNumber < computerNumber) {
      userNumber = parseInt(prompt("too small guess again:"))
    }
    if (userNumber == computerNumber) {
      alert("Winner!!");
      return;
    }
  }
  alert("out of chances :( ");
  return;
}


  let guessedNum = parseInt(prompt("Guess a Number between 0-10:"));
  // if (isNaN(guessedNum)) {                        // check if guessedNum is not a number
  //   alert('Sorry Not a number, Goodbye');
  //   return;
  // }else if (guessedNum > 10 || guessedNum < 0) {  // check if guessedNum is not in range
  //   alert('Sorry it’s not a good number, Goodbye');
  //   return;
  // } else {
  // let computerNum = Math.floor(Math.random() * 11);
  // test(guessedNum, computerNum);
  // }
  while (isNaN(guessedNum) || guessedNum > 10 || guessedNum < 0) {
    guessedNum = parseInt(prompt("Guess a Number again between 0-10:"));
  }
    let computerNum = Math.floor(Math.random() * 11);
    test(guessedNum, computerNum);
}
