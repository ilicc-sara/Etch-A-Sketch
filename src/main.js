"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");
const colorModeBtn = document.querySelector(".color-mode");
const randomModeBtn = document.querySelector(".random-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

const boardEl = document.querySelector(".board-container");

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
  text.style.color = inputColorEl.value;
  colorModeBtn.classList.add("active");
  randomModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

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

function createSquareGrid(num) {
  for (let i = 0; i < num; i++) {
    let square = document.createElement("div");
    boardEl.appendChild(square).className = "box";
    square.addEventListener("mouseenter", function (e) {
      // //prettier-ignore
      // if (colorModeBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.colorMode();
      // //prettier-ignore
      // if (randomModeBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.randomMode();
      // //prettier-ignore
      // if (eraserBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.eraser();
      e.target.style.backgroundColor = sketch.getColor();
    });
  }
}
// input type range
// slusam na event "input"
createSquareGrid(256);

colorModeBtn.addEventListener("click", function () {
  sketch.setColor(inputColorEl.value);
});

randomModeBtn.addEventListener("click", function () {
  sketch.setColor(randomColor());
});

eraserBtn.addEventListener("click", function (e) {
  sketch.setColor("white");
});

const boxes = document.querySelectorAll(".box");

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
