const robots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: './assets/Robo1.png'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: './assets/Robo2.png'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: './assets/Robo3.png'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: './assets/Robo4.png'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: './assets/Robo5.png'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: './assets/Robo6.png'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image: 'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image: 'https://robohash.org/10?200x200'
  }
];

class Card {
  constructor(obj) {
    this.id = obj.id,
      this.username = obj.username,
      this.email = obj.email,
      this.image = obj.image
  }

  createCard() {
    let newDiv = document.createElement('div')
    newDiv.classList.add('card')
    newDiv.classList.add('col-3')
    let newImage = document.createElement('img')
    newImage.classList.add('card-img-top');
    newImage.src = this.image;
    newImage.alt = "Robot Photo"
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    let title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = this.username
    let par = document.createElement('p')
    par.classList.add('card-text')
    par.textContent = `user name:${this.username} email: ${this.email}`;
    cardBody.append(title, par);
    newDiv.append(newImage, cardBody);
    cointainerEl.appendChild(newDiv);
  }
}



function displayCards() {
  removeAllChildNodes(cointainerEl);
  let fltrRobots = robots.filter((Robot) => nameContains(Robot,inpt.value));
  console.log(fltrRobots);
  fltrRobots.forEach((item, i) => {
    let cardToDo = new Card(item);
    cardToDo.createCard();
  });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function nameContains (obj, inputVal) {
  let objName = obj.username.toLowerCase()
  let inptVal = inputVal.toLowerCase()
  console.log(objName);
  console.log(inptVal);
  return objName.includes(inptVal)
}

let cointainerEl = document.querySelector('#mainCointainer')
let inpt = document.querySelector('#inputID');
console.log(inpt.value);
displayCards();
