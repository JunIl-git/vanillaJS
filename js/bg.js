const body = document.querySelector("body");
const bgClass = "bgImage";

function randomImage(randomNum) {
  const bgImage = new Image();
  body.appendChild(bgImage);
  bgImage.src = `images/${randomNum}.jpg`;
  bgImage.classList.add(bgClass);
}

function randomNumber() {
  const number = Math.floor((Math.random() * 7) + 1);
  return number;
}

function init() {

  randomImage(randomNumber());
}

init();
