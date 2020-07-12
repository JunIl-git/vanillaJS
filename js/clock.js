const clockTitle = document.querySelector(".clockTitle");


function getTime() {
  const today = new Date();
  const day = today.getDay
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
