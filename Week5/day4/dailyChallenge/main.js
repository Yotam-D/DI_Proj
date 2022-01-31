let input = document.querySelector('input')
console.log(input);

function onlyLetters(e) {
  console.log(e.key);
  console.log(/[a-z]/i.test(e.key));
  return /[a-z]/i.test(e.key);
}
