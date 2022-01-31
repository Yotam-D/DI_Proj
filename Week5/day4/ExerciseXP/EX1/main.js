let playBtn = document.querySelector('button');
let redEl = document.querySelector("#animate")
let xPos = 0;


function myMove() {
  let interval = setInterval(function() {
    xPos += 10;
    redEl.style.left = `${xPos}px`
    if (xPos >= 350) {
      clearInterval(interval)
    }
  }, 100)
}
