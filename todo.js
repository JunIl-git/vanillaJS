const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "currentToDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const filterFn = toDos.filter(function (toDo) {
    return toDo.id !== JSON.parse(li.id);
  });
  console.log(filterFn);
  toDos = filterFn;
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);
  delBtn.innerText = "❌";
  delBtn.style.border = "none";
  delBtn.style.background = "none";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  const toDoObj = {
    id: toDos.length + 1,
    text: text,
  }
  li.id = toDoObj.id;
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const writeToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDos(writeToDo);
}

function loadToDos() {
  const currentToDos = localStorage.getItem(TODOS_LS);
  if (currentToDos !== null) {
    const parsedToDos = JSON.parse(currentToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    })
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
