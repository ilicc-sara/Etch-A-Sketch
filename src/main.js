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
    // square.addEventListener("mouseenter", function (e) {
    //   e.target.style.backgroundColor = sketch.colorMode();
    // });
  }
}

createSquareGrid(256);

colorModeBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = sketch.colorMode();
  });
});

randomModeBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = sketch.randomMode();
  });
});

eraserBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = sketch.eraser();
  });
});

const boxes = document.querySelectorAll(".box");

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
