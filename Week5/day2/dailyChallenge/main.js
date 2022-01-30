let playBtn = document.querySelector('#lib-button');
playBtn.addEventListener('click', createStory);

function getValue (inputID) {
  return document.querySelector(`#${inputID}`).value;
}

function checkEmpty (){
  let inputObjArr = document.querySelectorAll('input');
  let stringsArray = [];
  for (var i = 0; i < inputObjArr.length; i++) {
  let curStr = inputObjArr[i].value;
  console.log(curStr);
  if(curStr == '' || curStr == null){
    return true;
    }
  }
  return false;
}


function createStory (){
  if(checkEmpty()){
    alert("fill all values");
    return;
  }
  let story =
  `funnt ${getValue("person")} went to ${getValue("place")} to \n see ${getValue("adjective")} ${getValue("noun")}, as I always say : never stop ${getValue("verb")}!`;
  console.log('story');
  let storyPar = document.querySelector('#story');
  storyPar.textContent = story;
}
