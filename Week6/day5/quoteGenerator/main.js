let quoteArr = []
let id = 0
let currentId
let newQuoteID
let authorPlace = document.querySelector('.authorShow')
let quotePlace = document.querySelector('.quoteShow')
let authorInp = document.querySelector('#authorInput')
let quoteInp = document.querySelector('#quoteInput')
console.log(authorInp.value);
createQuote('Shel Silverstein', 'Listen to the mustnts, child. Listen to the donts. Listen to the shouldnts, the impossibles, the wonts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.')
createQuote('Helen Keller', 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.')
createQuote('Joan Powers', 'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you')
createQuote('Stephen Chbosky', 'So, this is my life. And I want you to know that I am both happy and sad and Im still trying to figure out how that could be')
createQuote('Albert Einstein', 'Life is like riding a bicycle. To keep your balance, you must keep moving')
createQuote('Jane Austen', 'There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature')


function createQuote(author = authorInp.value, quote = quoteInp.value) {
  if (author !== '' && quote !== '') {
    let newQuote = {
      id: id,
      author: author,
      quote: quote
    }
    id++;
    quoteArr.push(newQuote);
    console.log(quoteArr);
  }
}

function generateQuote() {
  do {
    newQuoteID = Math.floor(Math.random() * quoteArr.length);
    console.log(newQuoteID);
  } while (newQuoteID === currentId);
  authorPlace.textContent = quoteArr[newQuoteID]["author"]
  quotePlace.textContent = '\"' + quoteArr[newQuoteID]["quote"] + '\"'
  currentId = newQuoteID;
}
