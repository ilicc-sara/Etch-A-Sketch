"use strict";
import "./style.css";

const inputColor = document.querySelector(".choose-color");

inputColor.addEventListener("input", function () {
  console.log(inputColor.value);
});

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
