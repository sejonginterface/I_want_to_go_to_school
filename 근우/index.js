const mainText = document.querySelector('.text__main');
const getButton = document.querySelector('.search__header__button');
const inputText = document.querySelector('.search__header__input');

const URL = {
  myStatus: 'http://interface.com/api/my_status',
  author: 'http://interface.com/api/author',
};

const message = {
  myStatus: `HTTP Header*Status Code: 200 OK**HTTP Body*{* "message" : "학교에 상당히 가고 싶습니다...* 꽃이 지고 나서야 봄 인줄 알았습니다...* 심심해 죽을 것 같읍니다..."*}`,
  author: `HTTP Header*Status Code: 200 OK**HTTP Body*{ "author" : "moaikang",* "status" : "휴학한 화석"*}`,
  notFound: `HTTP Header*Status Code: 404 NOT FOUND**HTTP Body*{* "message" : "Invalid Access!"*}`,
};

let loop;

const getAPI = () => {
  clearInterval(loop);
  let currentMessage = null;
  let loopCounter = 0;

  mainText.innerHTML = '';

  switch (inputText.value) {
    case URL.myStatus:
      currentMessage = message.myStatus;
      break;
    case URL.author:
      currentMessage = message.author;
      break;
    default:
      currentMessage = message.notFound;
      break;
  }

  loop = setInterval(() => {
    if (loopCounter === currentMessage.length - 1) {
      clearInterval(loop);
    }

    if (currentMessage[loopCounter] === '*') {
      mainText.innerHTML += '<br>';
      loopCounter += 1;
      return;
    }

    mainText.innerHTML += `${currentMessage[loopCounter]}`;

    loopCounter += 1;
  }, 100);
};

getButton.addEventListener('click', getAPI);
