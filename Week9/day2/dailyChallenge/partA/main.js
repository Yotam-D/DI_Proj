function makeAllCaps(wordsArr) {
  return new Promise((resolve, reject) => {
    if (wordsArr.every(item => typeof item === "string")) {
      resolve(wordsArr.join(' '))
    } else {
      reject("Not all array items are of type string")
    }
  })
}

function sortWords (upperStr) {
  return new Promise((resolve, reject) => {
    let uperArr = upperStr.split(' ')
    console.log(uperArr);
    if(uperArr.length > 4){
      resolve(uperArr.sort().map(str => str.toUpperCase()))
    }
    else{
      reject("array length smaller than 4")
    }
  })
}

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
