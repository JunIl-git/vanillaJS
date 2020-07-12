const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser";
const USER_CN = "showing";

function saveLS(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveLS(currentValue);
  loadGreeting(currentValue);
}

function paintGreeting(text) {
  form.classList.remove(USER_CN);
  greeting.classList.add(USER_CN);
  greeting.innerText = `Hello ${text}`;
}

function writeName() {
  form.classList.add(USER_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadGreeting() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    writeName()
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadGreeting();
}

init();
