"use strict";

const windowOpen = document.querySelector(".window-open");
const windowClose = document.querySelector(".window-close");

windowOpen.addEventListener("click", function () {
  document.querySelector(".nav-kanan").style.right = "-3rem";
});
windowClose.addEventListener("click", function () {
  document.querySelector(".nav-kanan").style.right = "-15rem";
});
