"use strict";

const typedNameEl = document.getElementById("typed-name");
if (typedNameEl) {
  new Typed("#typed-name", {
    strings: ["Hi", "I'm Michael."],
    typeSpeed: 90,
  });
}

const btnBurger = document.querySelector(".burger-menu");

function showHide() {
  console.log("test");
  let click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
  console.log(click.style.display);
}

btnBurger.addEventListener("click", showHide);
