//Daily Challange
for (var i = 0; i < 5; i++) {
    console.log('\*'.repeat(i));
}



// first way
let array = [
  [1,2],
  [3,4]
];
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    console.log('\*'.repeat(array[i][j]));
  }
}

// second way
strToLog = '';
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    strToLog = '\*'.repeat(i*2) +  '\*'.repeat(j+1)     //   i goes 0=>2       j goes 1=>2
    console.log(strToLog);
  }
}
