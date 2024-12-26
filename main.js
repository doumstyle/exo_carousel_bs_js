let carousel = document.querySelector("#carousel");
carousel = new bootstrap.Carousel(carousel, {
  interval: 2000,
  touch: false,
});

document.querySelector("#play").addEventListener("click", () => {
  carousel.cycle();
});

const subscribeBtn = document.querySelector("#subscribe");

const swapBtnTextAndStyle = () => {
  if (document.body.classList.contains("text-light")) {
    subscribeBtn.classList.add("bg-warning");
    subscribeBtn.classList.add("text-dark");
  }
  subscribeBtn.textContent =
    subscribeBtn.textContent === "Abonnez-vous" ? "Abonné" : "Abonnez-vous";
};

subscribeBtn.addEventListener("click", swapBtnTextAndStyle);

const progressBarOnScroll = () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  document.querySelector(
    "#progress-bar"
  ).style.width = `${scrollPercentRounded}%`;
};

window.onscroll = progressBarOnScroll;

const darkModeBtn = document.querySelector("#darkModeLabel");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-link");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-primary-emphasis");
  document.body.classList.toggle("text-light");
  document.body.classList.toggle("text-bg-dark");
  navbar.classList.toggle("bg-body-tertiary");
  navbar.classList.toggle("bg-dark");

  if (subscribeBtn.classList.contains("btn-dark")) {
    subscribeBtn.classList.toggle("bg-warning");
    subscribeBtn.classList.toggle("text-dark");
    subscribeBtn.classList.toggle("btn-dark");
  }

  if (document.body.classList.contains("text-light")) {
    document.querySelector("#progress-bar").style.background = "#fff";
  } else {
    document.querySelector("#progress-bar").style.background = "#000";
  }

  navItems.forEach((item) => {
    item.classList.toggle("text-light");
  });
});
