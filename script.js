const home = document.querySelector("#home");
const aboutMe = document.querySelector("#about-me");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

const buttonHome = document.querySelectorAll("#btn-home");
const buttonAboutMe = document.querySelectorAll("#btn-about-me");
const buttonSkills = document.querySelectorAll("#btn-skills");
const buttonProjects = document.querySelectorAll("#btn-projects");
const buttonContact = document.querySelectorAll("#btn-contact");

// Botones de skills
const htmlBtn = document.querySelector("#html");
const cssBtn = document.querySelector("#css");
const javascriptBtn = document.querySelector("#javascript");
const reactBtn = document.querySelector("#react");
const nodejsBtn = document.querySelector("#nodejs");

// Textos de skills
const html = document.querySelector("#html-text");
const css = document.querySelector("#css-text");
const javascript = document.querySelector("#javascript-text");
const react = document.querySelector("#react-text");
const nodejs = document.querySelector("#nodejs-text");

const aboutMeButton = document.querySelector("#about-me-button");
const cvButton = document.querySelector("#cv-button");

cvButton.addEventListener("click", () => {
  window.open("src/Brian_Alvernas.pdf", "_blank");
});

onload = () => {
  home.style.display = "flex";
  home.classList.remove("fadeout");
  home.classList.add("fadein");
  oculteAll();
};

aboutMeButton.addEventListener("click", () => {
  pageupdate(aboutMe, buttonAboutMe);
});

/* Funcion de skills */

function toggleSkill(skill) {
  const skillstexts = [html, css, javascript, react, nodejs];

  skillstexts.forEach((s) => {
    if (s !== skill) {
      s.classList.remove("skill-active");
    } else {
      s.classList.add("skill-active");
    }
  });
}

/* Funciones de botones de skills */
htmlBtn.addEventListener("click", () => {
  toggleSkill(html);
});

cssBtn.addEventListener("click", () => {
  toggleSkill(css);
});

javascriptBtn.addEventListener("click", () => {
  toggleSkill(javascript);
});

reactBtn.addEventListener("click", () => {
  toggleSkill(react);
});
nodejsBtn.addEventListener("click", () => {
  toggleSkill(nodejs);
});

function oculteAll() {
  const pages = [aboutMe, skills, projects, contact];

  pages.forEach((page) => {
    page.style.display = "none";
  });
}

function pageupdate(actualPage, buttonActive) {
  const pages = [home, aboutMe, skills, projects, contact];
  const buttons = [
    buttonHome,
    buttonAboutMe,
    buttonSkills,
    buttonProjects,
    buttonContact,
  ];

  pages.forEach((page) => {
    if (page !== actualPage && page.style.display !== "none") {
      // Ocultar la que está activa ahora
      page.classList.remove("fadein");
      page.classList.add("fadeout");

      page.addEventListener(
        "animationend",
        () => {
          page.style.display = "none";

          // Mostrar la nueva después que la otra termine
          actualPage.style.display = "flex";
          actualPage.classList.remove("fadeout");
          actualPage.classList.add("fadein");
        },
        { once: true }
      );
    }
  });
  buttons.forEach((buttonGroup) => {
    buttonGroup.forEach((button) => {
      if (buttonGroup === buttonActive) {
        button.classList.add("button-active");
      } else {
        button.classList.remove("button-active");
      }
    });
  });
}

buttonHome.forEach((button) => {
  button.addEventListener("click", () => {
    pageupdate(home, buttonHome);
  });
});

buttonAboutMe.forEach((button) => {
  button.addEventListener("click", () => {
    pageupdate(aboutMe, buttonAboutMe);
  });
});

buttonSkills.forEach((button) => {
  button.addEventListener("click", () => {
    pageupdate(skills, buttonSkills);
  });
});

buttonProjects.forEach((button) => {
  button.addEventListener("click", () => {
    pageupdate(projects, buttonProjects);
  });
});

buttonContact.forEach((button) => {
  button.addEventListener("click", () => {
    pageupdate(contact, buttonContact);
  });
});
