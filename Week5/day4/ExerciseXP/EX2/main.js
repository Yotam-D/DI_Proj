function startDrag(e) {
  e.dataTransfer.setData("id", e.target.id)
}

function drover(e) {
  e.preventDefault()
}

function onDrop(e) {
  e.preventDefault()
  let catchId = (e.dataTransfer.getData("id"));
  let dragedEl = document.querySelector(`#${catchId}`)
  e.target.appendChild(dragedEl);
}
