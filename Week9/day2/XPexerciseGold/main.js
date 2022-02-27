const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]

function getPromfromAPI (url) {
  fetch(url)
    .then(response => promArr.push(response.json()))
}

let promArr = [];
urls.forEach((item) => {
  getPromfromAPI(item)
});

console.log(promArr);
