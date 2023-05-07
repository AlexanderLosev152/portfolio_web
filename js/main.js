// burger
function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

// scroll

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home__text,.about__img,.heading,.services__content,.work__text,.app h3,form input", {}),
  sr.reveal(".home__img,.social,.about__text,.box,.work__img,.app,form textarea", { delay: 200 });
