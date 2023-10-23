const projects = document.querySelectorAll(".link");
const bars = document.querySelectorAll(".bar");
const targetElement = document.querySelector(".tehnologies");

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

observer.observe(targetElement);
