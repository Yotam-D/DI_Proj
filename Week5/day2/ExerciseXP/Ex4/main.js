let subBtn = document.querySelector('#submit');
subBtn.addEventListener('click', calculate)

function calculate(e) {
  e.preventDefault();
  let radius = Number(document.querySelector('#radius').value);
  console.log((4 / 3) * Math.PI * radius ** 3);
  let volume = document.querySelector('#volume');
  volume.value = (4 / 3) * Math.PI * radius ** 3;
}
