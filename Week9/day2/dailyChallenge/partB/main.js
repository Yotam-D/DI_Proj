let morseJsStr = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
function toJs() {
  return new Promise((resolve, reject) => {
    if (checkEmptyObj(morseJsStr)) {
      reject("Error: morse js object is empty")
    } else {
      let jsObj = JSON.parse(morseJsStr)
      resolve(jsObj)
    }
  })
}
function toMorse(morseJs) {
  let word = prompt("enter word or sentence to morsify")
  return new Promise((resolve, reject) => {
    if (checkValidchar(word, morseJs)) {
      let morseArr = [];
      for (var i = 0; i < word.length; i++) {
      morseArr.push(word[i] == ' ' ? ' ' : morseJs[word[i]])    // pushes ' ' for ' ' and translation for morse char
      }
      resolve(morseArr)
    } else {
      reject("Error: one or more characters is invalid")
    }
  })
}
function joinWords(morseTranslation) {
  morseTranslation.forEach((item) => {
    let p = document.createElement('p')
    p.textContent = item
    console.log(p);
    p.append(document.createElement('br'))
    document.querySelector('.disp').append(p);
  });

}


function checkEmptyObj(obj) {
  return (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype)
}
function checkValidchar(userStr, obj) {
  let existedChars = editChkStr(userStr)
  let validChars = Object.keys(obj)
  let checker = (validOpts, existedOpts) => existedChars.every(item => validChars.includes(item));
  console.log(checker(validChars, existedChars));
  return checker(validChars, existedChars);
}

// this fn takes str and returns an array of chars without spaces and duplicates.
function editChkStr(str) {
  str = str.replace(/\s/g, '')
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) < 0) {
      result.push(str[i]);
    }
  }
  return result;
}



toJs()
  .then(jsObj => toMorse(jsObj))
  .then(morseArr => joinWords(morseArr))
  .catch(error => console.log(error))
