let urlStr = window.location.href;

try {
  let obj = Object.fromEntries(urlStr.split('?')[1].split('&').map((e)=> e.split('=')));
  let myJson = JSON.stringify(obj)
  document.querySelector('.print').textContent = myJson
  console.log(myJson);

} catch (error) {
  console.error(error);
}
