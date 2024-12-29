"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");
const colorModeBtn = document.querySelector(".color-mode");
const randomModeBtn = document.querySelector(".random-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

const boardEl = document.querySelector(".board-container");

const graphEl = document.querySelector(".graph");
const num = document.querySelectorAll(".num");
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNum(0, 225)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;

const sketcher = function () {
  let color = "red";
  let randomCol = false;

  const setColor = (value) => (color = value);
  const getColor = () => color;

  const getRandomCol = () => randomCol;
  const setRandomCol = (value) => (randomCol = value);

  return { getColor, setColor, getRandomCol, setRandomCol };
};

const sketch = sketcher();

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
  text.style.color = inputColorEl.value;
  sketch.setColor(inputColorEl.value);
  sketch.setRandomCol(false);

  ////////////////////////////////////////////////////
  colorModeBtn.classList.add("active");
  randomModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

function makeRows(rows, cols) {
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${rows}, minmax(0, 1fr))`;
  boardEl.style.gridTemplateRows = `repeat(${cols}, minmax(0, 1fr)`;
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    boardEl.appendChild(cell).className = "box";
    cell.addEventListener("mouseenter", function (e) {
      if (sketch.getRandomCol() === true) {
        e.target.style.backgroundColor = sketch.setColor(randomColor());
      } else {
        e.target.style.backgroundColor = sketch.getColor();
      }
    });
  }
}

makeRows(16, 16);

let boxes = document.querySelectorAll(".box");

graphEl.addEventListener("change", function (e) {
  // console.log(e.target.value);
  const value = e.target.value;
  makeRows(value, value);
  num.forEach((num) => (num.textContent = value));
  ////////////////////////////////////////////////////////////////
  boxes = document.querySelectorAll(".box");
});

colorModeBtn.addEventListener("click", function () {
  sketch.setColor(inputColorEl.value);
  sketch.getColor();
  ////////////////////////////////////////////////////
  colorModeBtn.classList.toggle("active");
  randomModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

randomModeBtn.addEventListener("click", function () {
  sketch.setRandomCol(true);
  ///////////////////////////////////////////////////
  randomModeBtn.classList.toggle("active");
  colorModeBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", function () {
  sketch.setRandomCol(false);
  sketch.setColor("white");
  ////////////////////////////////////////////////////
  eraserBtn.classList.toggle("active");
  colorModeBtn.classList.remove("active");
  randomModeBtn.classList.remove("active");
});

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
