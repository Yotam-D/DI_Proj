let inpt = document.querySelector('input')
const getProduts = () => {
    fetch('http://localhost:5000/api/products')
    .then(res=>res.json())
    .then(data=> {
      createProducts(data);
    })
    .catch(e => {
      console.log(e);
    })
  }
  
  const createProducts = (arr) => {
    const div = document.getElementById('products');
    arr.forEach((item, i) => {
      let p = document.createElement('p');
      p.innerText = item.name;
      div.appendChild(p);
    })
    }   

function getPrice() {
    fetch(`http://localhost:5000/api/search/?name=${inpt.value}`)
    .then(res =>res.json())
    .then(data => createprice(data))
}
const createprice = (obj) => {
    const div2 = document.getElementById('price');
    let p = document.createElement('p');
    p.innerText = obj.price;
    div2.appendChild(p);
    }
      
