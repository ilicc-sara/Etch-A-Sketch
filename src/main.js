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

// const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  // Creates rows
  for (r = 0; r < rowNum; r++) {
    let square = document.createElement("div");
    boardEl.appendChild(square).className = "box";
  }
}

// Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < square.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    }
  }
}

defaultGrid();

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
