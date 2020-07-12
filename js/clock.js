const clockTitle = document.querySelector(".clockTitle");
const clockTitle2 = document.querySelector(".clockTitle2");

<<<<<<< Updated upstream
function title(m, date, day) {
  if (day === 0) {
    clockTitle2.innerText = `${m}월 ${date}일 (일)`;
  } else if (day === 1) {
    clockTitle2.innerText = `${m}월 ${date}일 (월)`;
  } else if (day === 2) {
    clockTitle2.innerText = `${m}월 ${date}일 (화)`;
  } else if (day === 3) {
    clockTitle2.innerText = `${m}월 ${date}일 (수)`;
  } else if (day === 4) {
    clockTitle2.innerText = `${m}월 ${date}일 (목)`;
  } else if (day === 5) {
    clockTitle2.innerText = `${m}월 ${date}일 (금)`;
  } else if (day === 6) {
    clockTitle2.innerText = `${m}월 ${date}일 (토)`;
  }
}

function getTime() {
  const today = new Date();
  const month = today.getMonth()
  const date = today.getDate();
  const day = today.getDay();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  title(month, date, day);
=======
function getTime() {
  const today = new Date();
  const month = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} : ${month}`;
>>>>>>> Stashed changes
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
