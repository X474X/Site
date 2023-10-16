const projects = document.querySelectorAll(".link");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", () => {
    let current = document.querySelector(projects[i].getAttribute("goTo"));
    current.scrollIntoView();
    current.scrollIntoView({
      behavior: "smooth",
    });
    console.log(current);
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
