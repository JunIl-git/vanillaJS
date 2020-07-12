const weather = document.querySelector(".js-weather");

const API_KEY = "57393379b29c0e0c88f9a4efe4c45138";
const COORDS = "coords";


function saveCoords(obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    longitude: longitude,
    latitude: latitude,
  }
  saveCoords(coordsObj);
}

function geoError() {
  console.log('cant!')
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function getWeather(lat, lon) {
  //마지막에 &units=metric사용해서 표기법 바꿈
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function (response) {
    return response.json();
  }).then(function (json) {
    const temp = json.main.temp;
    const place = json.name;
    console.log(temp, place);
    weather.innerText = `${temp} @ ${place}`;
  })
};


function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();