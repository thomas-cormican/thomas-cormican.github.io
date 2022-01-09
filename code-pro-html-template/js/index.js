// make button scroll down

document.querySelector(".down-button").addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

// slide menu

function slideToggle() {
  let navbarLinks = document.querySelector(".navbar__links");
  let background = document.querySelector(".navbar__close");
  console.log("1");
  navbarLinks.classList.contains("slide-in")
    ? (navbarLinks.classList.remove("slide-in"),
      background.classList.remove("show"))
    : (navbarLinks.classList.add("slide-in"), background.classList.add("show"));
}

function slideOut() {
  let navbarLinks = document.querySelector(".navbar__links");
  let background = document.querySelector(".navbar__close");
  navbarLinks.classList.contains("slide-in") &&
    (navbarLinks.classList.remove("slide-in"),
    background.classList.remove("show"));
}
