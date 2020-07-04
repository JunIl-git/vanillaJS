const body = document.querySelector("body");

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);

}

function genRanDom() {
  const number = Math.floor(Math.random() * 3);
  return number;
}

function init() {
  const randomNumber = genRanDom();
  paintImage(randomNumber);
}

init();