let xhr = new XMLHttpRequest();
let resp = {};
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
xhr.send();
xhr.onload = function () {
  let resp = JSON.parse(xhr.response);
  console.log(resp);
}



let getGIFReq = new XMLHttpRequest();
let searchWord = 'sun'
let limit = '10';
getGIFReq.open('GET', `https://api.giphy.com/v1/gifs/search?q=${searchWord}&rating=g&limit=${limit}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
getGIFReq.send()
getGIFReq.onload = function() {
  let response = JSON.parse(getGIFReq.response)
  let respArr = response.data;
  console.log(respArr);
  respArr.forEach(obj => {
    let newIframe = document.createElement('iframe')
    newIframe.src = obj.embed_url;
    document.querySelector('.sungifs').append(newIframe)
  })

}
