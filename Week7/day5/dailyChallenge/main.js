function isAnagram (arg1,arg2) {
  str1 = arg1.toLowerCase().replace(/\s/g, '');
  str2 = arg2.toLowerCase().replace(/\s/g, '');
  console.log(str1);
  console.log(str2);
  if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    if(str2.includes(str1[i])){
      str2 = str2.replace(str1[i],'');
      console.log(str2);
    }else {
      return false;
    }
  }
  return true;
}

function checkLetter (char, str) {

}


let a = "The Morse Codes "
let b = "Here comes dots"
console.log(isAnagram(a,b));
