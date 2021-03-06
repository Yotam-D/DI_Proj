function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(num)
    } else {
      reject("lower or equal to 10")
    }
  })
}


//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
