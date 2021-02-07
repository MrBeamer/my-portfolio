"use strict";

// Type.Js integration

const typedNameEl = document.getElementById("typed-name");
if (typedNameEl) {
  new Typed("#typed-name", {
    strings: ["Hi", "I'm Michael."],
    typeSpeed: 90,
  });
}

// Drop down menu

const btnBurger = document.querySelector(".burger-menu");

function showHide() {
  let click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

btnBurger.addEventListener("click", showHide);

// Alert for long loading times

let btnsLive = document.querySelectorAll(".live-button");

function note() {
  alert(
    "Websites - long loading times can occure, because heroku is sleeping and needs time to wake up!"
  );
}

btnsLive.forEach((button) => {
  button.addEventListener("click", note);
});

// Smooth scrolling

// About

const aboutBtn = document.querySelector(".about");

aboutBtn.addEventListener("click", function (event) {
  const aboutSection = document.querySelector("#about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Projects

const projectsBtn = document.querySelector(".projects");

projectsBtn.addEventListener("click", function (event) {
  const projectsSection = document.querySelector("#projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

// Contact
const contactBtn = document.querySelector(".contact");

contactBtn.addEventListener("click", function (event) {
  const contactSection = document.querySelector("#contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});
