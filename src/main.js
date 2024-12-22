"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");

const boardContainer = document.querySelector(".board-container");

const colorModeBtn = document.querySelector(".color-mode");
const randomModeBtn = document.querySelector(".random-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

const boxes = document.querySelectorAll(".box");

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
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

colorModeBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    console.log((e.target.style.backgroundColor = sketch.colorMode()));
    // console.log((e.target.style.backgroundColor = sketch.randomMode()));
    // console.log((e.target.style.backgroundColor = sketch.eraser()));
  });
});

randomModeBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    // console.log((e.target.style.backgroundColor = sketch.colorMode()));
    console.log((e.target.style.backgroundColor = sketch.randomMode()));
    // console.log((e.target.style.backgroundColor = sketch.eraser()));
  });
});

eraserBtn.addEventListener("click", function () {
  boardContainer.addEventListener("mouseover", function (e) {
    // console.log((e.target.style.backgroundColor = sketch.colorMode()));
    // console.log((e.target.style.backgroundColor = sketch.randomMode()));
    console.log((e.target.style.backgroundColor = sketch.eraser()));
  });
});

clearBtn.addEventListener("click", function () {
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});
