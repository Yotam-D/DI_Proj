// Use Promise.resolve(value) to create a promise that will resolve
// itself with a value of 3.

const prom1 = Promise.resolve(3)
  .then(result => console.log(result))

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const prom2 = Promise.reject("Boo")
  .catch(error => console.log(error))
