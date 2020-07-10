const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "currentToDos";
const TODOS_CN = "form";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== JSON.parse(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  }
  li.id = toDoObj.id;
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  const writeToDo = toDoInput.value;
  event.preventDefault();
  paintToDos(writeToDo);
  toDoInput.value = "";
}


function loadToDos() {
  const currentToDos = localStorage.getItem(TODOS_LS);
  if (currentToDos !== null) {
    const parsedToDos = JSON.parse(currentToDos);
    const forEach = parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();