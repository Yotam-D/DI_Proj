// EX1

let resArr = [];
async function promiseAll(promisesArr) {
  for (var i = 0; i < promisesArr.length; i++) {
    let response = await promisesArr[i]
    resArr.push(response)
  }
  return resArr;
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

promiseAll([promise1, promise2, promise3]).then(res => console.log(res))


// EX2
let showBtn = document.querySelector('#showB')
showBtn.addEventListener('click', show)


function makeReq() {
  let inputsArr = document.querySelectorAll('input');
  let reqObj = {
    firstCity: inputsArr[0].value,
    firstLong: inputsArr[1].value,
    firstLat: inputsArr[2].value,
    secCity: inputsArr[3].value,
    secLong: inputsArr[4].value,
    secLat: inputsArr[5].value
  }
  return reqObj;
}

async function show () {
  let requestObj = makeReq();
  console.log(requestObj);
  console.log(`https://api.sunrise-sunset.org/json?lat=${requestObj.firstLat}&lng=${requestObj.firstLong}`);
  let fstResp = await fetch(`https://api.sunrise-sunset.org/json?lat=${requestObj.firstLat}&lng=${requestObj.firstLong}`)
  let secResp =await fetch(`https://api.sunrise-sunset.org/json?lat=${requestObj.secLat}&lng=${requestObj.secLong}`)
  // console.log(fstResp.json(), secResp.json());
  Promise.all([fstResp.json(), secResp.json()])
    .then(values =>{
      let div = document.querySelector('div')
      div.textContent = `sunset in ${requestObj.firstCity} is ${values[0].results.sunset}
      sunset in ${requestObj.secCity} is ${values[1].results.sunset}`
    })
    .catch(err => console.log(err))

  }
