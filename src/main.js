"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");
const boardContainer = document.querySelector(".board-container");
const colorModeBtn = document.querySelector(".color-mode");
const randomModeBtn = document.querySelector(".random-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

const boardEl = document.querySelector(".board-container");

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
  text.style.color = inputColorEl.value;
});

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNum(0, 225)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;

const sketcher = function () {
  let color = "red";

  const colorMode = () => (color = inputColorEl.value);
  const randomMode = () => (color = randomColor());
  const eraser = () => (color = "white");
  return { colorMode, randomMode, eraser };
};

const sketch = sketcher();

function createSquareGrid(num) {
  for (let i = 0; i < num; i++) {
    let square = document.createElement("div");
    boardEl.appendChild(square).className = "box";
    square.addEventListener("mouseenter", function (e) {
      //prettier-ignore
      if (colorModeBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.colorMode();
      //prettier-ignore
      if (randomModeBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.randomMode();
      //prettier-ignore
      if (eraserBtn.classList.contains("active")) e.target.style.backgroundColor = sketch.eraser();
    });
  }
}

createSquareGrid(256);

colorModeBtn.addEventListener("click", function () {
  colorModeBtn.classList.toggle("active");
  randomModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

randomModeBtn.addEventListener("click", function () {
  randomModeBtn.classList.toggle("active");
  colorModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", function () {
  eraserBtn.classList.toggle("active");
  colorModeBtn.classList.remove("active");
  randomModeBtn.classList.remove("active");
});

const boxes = document.querySelectorAll(".box");

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
