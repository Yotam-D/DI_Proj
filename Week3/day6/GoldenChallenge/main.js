//Bubbling sort
const numbers = [5,0,9,1,7,4,2,6,3,8];
let j, temp;
let sortedNumbers = [numbers[0]];
for (var i = 0; i < numbers.length-1; i++) {
  j = i+1;
  sortedNumbers.push(numbers[j]);
  while (j > 0 && sortedNumbers[j] > sortedNumbers[j-1]) {
    temp = sortedNumbers[j-1];
    sortedNumbers[j-1] = sortedNumbers[j];
    sortedNumbers[j] = temp;
    j--;
  }
}
console.log(sortedNumbers);
