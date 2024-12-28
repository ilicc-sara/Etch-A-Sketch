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

  const setColor = (value) => (color = value);
  const getColor = () => color;

  return { getColor, setColor };
};

const sketch = sketcher();

inputColorEl.addEventListener("input", function () {
  // inputColorEl.value;
  console.log(inputColorEl.value);
  text.style.color = inputColorEl.value;
  sketch.setColor(inputColorEl.value);
});

// Sets important constants and variables

// Takes (rows, columns) input and makes a grid
// function makeRows(rowNum) {
//   // Creates rows
//   for (r = 0; r < rowNum; r++) {
//     let square = document.createElement("div");
//     boardEl.appendChild(square).className = "box";
//   }
// }

function makeRows(rows, cols) {
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${rows}, minmax(0, 1fr))`;
  boardEl.style.gridTemplateRows = `repeat(${cols}, minmax(0, 1fr)`;
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    boardEl.appendChild(cell).className = "box";
    cell.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = sketch.getColor();
    });
  }
}

makeRows(16, 16);

// defaultGrid();

// function createSquareGrid(num) {
//   for (let i = 0; i < num; i++) {
//     let square = document.createElement("div");
//     boardEl.appendChild(square).className = "box";
//     square.addEventListener("mouseenter", function (e) {
//       e.target.style.backgroundColor = sketch.getColor();

//       // randomColor();
//     });
//   }
// }
// // input type range
// // slusam na event "input"
// createSquareGrid(256);

graphEl.addEventListener("input", function () {
  makeRows(graphEl.value, graphEl.value);
  num.forEach((num) => (num.textContent = graphEl.value));
});

colorModeBtn.addEventListener("click", function () {
  sketch.getColor();
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
