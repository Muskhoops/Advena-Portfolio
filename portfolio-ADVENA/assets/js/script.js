"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// /**
//  * dark & light theme toggle
//  */

// const themeToggleBtn = document.querySelector("[data-theme-btn]");

// themeToggleBtn.addEventListener("click", function () {
//   elemToggleFunc(themeToggleBtn);

//   if (themeToggleBtn.classList.contains("active")) {
//     document.body.classList.remove("dark_theme");
//     document.body.classList.add("light_theme");

//     localStorage.setItem("theme", "light_theme");
//   } else {
//     document.body.classList.add("dark_theme");
//     document.body.classList.remove("light_theme");

//     localStorage.setItem("theme", "dark_theme");
//   }
// });

// /**
//  * check & apply last time selected theme from localStorage
//  */

// if (localStorage.getItem("theme") === "light_theme") {
//   themeToggleBtn.classList.add("active");
//   document.body.classList.remove("dark_theme");
//   document.body.classList.add("light_theme");
// } else {
//   themeToggleBtn.classList.remove("active");
//   document.body.classList.remove("light_theme");
//   document.body.classList.add("dark_theme");
// }

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("lang");

  // Définir les éléments à traduire
  const elementsToTranslate = {
    en: {
      // Textes en anglais
      home: "Home.",
      about: "About.",
      skills: "Skills.",
      portfolio: "Portfolio.",
      contact: "Contact.",
    },
    fr: {
      // Textes en français
      home: "Accueil.",
      about: "À propos.",
      skills: "Compétences.",
      portfolio: "Portfolio.",
      contact: "Contact.",
    },
  };

  // Fonction pour traduire les éléments en fonction de la langue sélectionnée
  function translateElements(language) {
    const elements = elementsToTranslate[language];

    // Modifier les textes des éléments de navigation
    document.querySelectorAll(".navbar-link").forEach((link, index) => {
      link.textContent = elements[Object.keys(elements)[index]];
    });
  }

  // Événement de changement de langue
  langSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateElements(selectedLanguage);
  });
});
