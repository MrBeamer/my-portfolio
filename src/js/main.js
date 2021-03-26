import Typed from "typed.js";

// Type.Js integration
const typedNameEl = document.getElementById("typed-name");
if (typedNameEl) {
  new Typed("#typed-name", {
    strings: ["Hi", "I'm Michael."],
    typeSpeed: 90,
  });
}

// Smooth scrolling

document
  .querySelector(".nav-desktop")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //matching strategy
    if (event.target.classList.contains("nav-item")) {
      const id = event.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// Mouse scrolling

document.querySelector(".mouse ").addEventListener("click", function () {
  document.querySelector("#knowledge").scrollIntoView({ behavior: "smooth" });
});

// Revealing elements  / fade in

const sections = document.querySelectorAll(".section");

function revealSection(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionsObserver = new IntersectionObserver(revealSection, revealOptions);

sections.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
});

/// Active navbar element toggle

const nav = document.querySelector(".nav-desktop");
const navElements = document.querySelectorAll(".nav-item");

nav.addEventListener("click", function (event) {
  const navElement = event.target.closest(".nav-item");
  if (!navElement) return;
  navElements.forEach((navItem) => navItem.classList.remove("active"));
  navElement.classList.add("active");
});

// Navbar mobile dropdown toggle

$(".burger-menu").on("click", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav--active");
});

// Scrollspy
// const navMobile = document.querySelector(".btn");

// console.log(UIkit.scrollspyNav(navMobile, { outview }));
