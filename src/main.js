"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");

const boardContainer = document.querySelector(".board-container");

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
});

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomNum(0, 225)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const sketcher = function () {
  let color = "red";

  const colorMode = () => (color = inputColorEl.value);

  const randomMode = () => (color = randomColor());

  const eraser = () => (color = "white");

  return { colorMode, randomMode, eraser };
};

const sketch = sketcher();

boardContainer.addEventListener("mouseover", function (e) {
  // console.log((e.target.style.backgroundColor = sketch.colorMode()));
  // console.log((e.target.style.backgroundColor = sketch.randomMode()));
  // console.log((e.target.style.backgroundColor = sketch.eraser()));
});
