function insertRow() {
  let numOfRow = document.querySelectorAll('tr')
  let nxtRowNum = numOfRow.length+1;
  let table = document.getElementsByTagName('table')
  console.log(table);
  let newTr = document.createElement('tr')
  for (let i = 1; i < 3; i++) {
    let newTD = document.createElement('td')
    newTD.textContent = `Row${nxtRowNum} cell${i}`;
    newTr.appendChild(newTD);
    table[0].appendChild(newTr)
  }

}
