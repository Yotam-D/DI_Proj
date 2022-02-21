// Create a promise that resolves itself in 4 seconds and returns a
// “success” string.
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("success")
      } else {
        reject("something went wrong")
      }
    }, 4000);
  }).then(result => console.log(result))
  .catch(error => console.log(error))


// How can you make your promise from part 1 shorter using
// Promise.resolve() and console.log “success”?

setTimeout(() => {
  let targetProm = Promise.resolve('Success2')
    .then(result => console.log(result))
    .catch(error => console.log(error))
}, 4000)
