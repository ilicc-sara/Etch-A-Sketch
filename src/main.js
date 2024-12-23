"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");
const colorModeBtn = document.querySelector(".color-mode");
const randomModeBtn = document.querySelector(".random-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

const boardEl = document.querySelector(".board-container");

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNum(0, 225)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;

const sketcher = function () {
  let color = "red";

  const setColor = (value) => (color = value);
  const getColor = () => color;

  const colorMode = () => (color = inputColorEl.value);
  const randomMode = () => (color = randomColor());
  const eraser = () => (color = "white");
  return { colorMode, randomMode, eraser, getColor, setColor };
};

const sketch = sketcher();

inputColorEl.addEventListener("input", function () {
  // inputColorEl.value;
  console.log(inputColorEl.value);
  text.style.color = inputColorEl.value;
  sketch.setColor(inputColorEl.value);
});
function createSquareGrid(num) {
  for (let i = 0; i < num; i++) {
    let square = document.createElement("div");
    boardEl.appendChild(square).className = "box";
    square.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = sketch.getColor();
    });
  }
}
// input type range
// slusam na event "input"
createSquareGrid(256);

colorModeBtn.addEventListener("click", function () {
  sketch.getColor(inputColorEl.value);
});

randomModeBtn.addEventListener("click", function () {
  sketch.setColor(randomColor());
});

eraserBtn.addEventListener("click", function () {
  sketch.setColor("white");
});

const boxes = document.querySelectorAll(".box");

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
