"use strict";
import "./style.css";

const inputColorEl = document.querySelector(".choose-color");

const boardContainer = document.querySelector(".board-container");

inputColorEl.addEventListener("input", function () {
  console.log(inputColorEl.value);
});

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const sketcher = function () {
  let color = "red";

  const colorMode = () => (color = inputColorEl.value);
  return { colorMode };
};

const sketch = sketcher();

boardContainer.addEventListener("mouseover", function (e) {
  console.log((e.target.style.backgroundColor = sketch.colorMode()));
});
