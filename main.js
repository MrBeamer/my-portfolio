// import Typed from "typed.js";
const typedNameEl = document.getElementById("typed-name");
if (typedNameEl) {
  new Typed("#typed-name", {
    strings: ["Hi", "I'm Michael."],
    typeSpeed: 90,
  });
}
