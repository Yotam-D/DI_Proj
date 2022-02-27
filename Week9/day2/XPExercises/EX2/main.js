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

let x = Promise.resolve('sucess2')
setTimeout(() => {
  x.then(result => console.log(result))
   .catch(err => console.error(err))
}, 4000);
