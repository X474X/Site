import PROJECTS from "./constants.js";
console.log(PROJECTS);
const projects = document.querySelectorAll(".link");
const bars = document.querySelectorAll(".bar");
const targetElement = document.querySelector(".tehnologies");
const button = document.querySelector(".button-wrapper");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const phoneMenu = document.querySelector(".menu-list");
const cardsWrapper = document.querySelector(".cards-wrapper");

let firstClick = false;
line1.style.transform = "translate(-50%, -50%)";
line2.style.transform = "translate(-50%, -50%)";
line3.style.transform = "translate(-50%, -50%)";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      barAnimation();
    }
  });
});

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", () => {
    let current = document.querySelector(projects[i].getAttribute("goTo"));
    current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (projects[i].getAttribute("goTo") === ".tehnologies") {
      barAnimation();
    }
  });
}

const barAnimation = () => {
  for (let i = 0; i < bars.length; i++) {
    setTimeout(() => {
      bars[i].style.width = bars[i].getAttribute("percent");
      setTimeout(() => {
        bars[i].innerHTML = bars[i].getAttribute("percent");
      }, 500);
    }, i * 800);
  }
};

button.addEventListener("click", () => {
  if (!firstClick) {
    line1.style.transform += "rotate(45deg)";
    line2.style.transform += "rotate(-45deg)";
    line3.style.transform += "rotate(45deg)";
    phoneMenu.style.display = "flex";

    setTimeout(() => {
      firstClick = true;
    }, 20);
  }
  if (firstClick) {
    line1.style.transform = "translate(-50%, -50%)";
    line2.style.transform = "translate(-50%, -50%)";
    line3.style.transform = "translate(-50%, -50%)";
    firstClick = false;
    phoneMenu.style.display = "none";
  }
});

for (let i = 0; i < PROJECTS.length; i++) {
  const div = document.createElement("div");
  div.classList.add("project-wrapper");
  const image = document.createElement("img");
  image.src = PROJECTS[i].image;
  div.appendChild(image);
  const h4 = document.createElement("h4");
  h4.innerHTML = PROJECTS[i].title;
  div.appendChild(h4);
  const hr = document.createElement("hr");
  div.appendChild(hr);
  const p1 = document.createElement("p");
  p1.classList.add("project-info-wrapper");
  p1.innerHTML = PROJECTS[i].description;
  div.appendChild(p1);
  const p2 = document.createElement("p");
  p2.classList.add("project-info-wrapper");
  p2.innerHTML = PROJECTS[i].purpose;
  div.appendChild(p2);
  const button = document.createElement("button");
  const a = document.createElement("a");
  a.href = PROJECTS[i].link;
  a.target = "_blank";
  a.innerHTML = "Look it up";
  button.appendChild(a);
  div.appendChild(button);
  cardsWrapper.appendChild(div);
}

observer.observe(targetElement);
