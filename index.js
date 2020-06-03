// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("#title");
const superEventHandler = {
  resized: function () {
    title.innerHTML = "you just resized!";
    title.style.color = colors[0];
  },
  mouseOver: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[1];
  },
  mouseLeave: function () {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[2];
  },
  mouseRight: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[3];
  },
};

window.addEventListener("resize", superEventHandler.resized);
title.addEventListener("mouseenter", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
document.addEventListener("contextmenu", superEventHandler.mouseRight);
// https://developer.mozilla.org/ko/docs/Web/Events
