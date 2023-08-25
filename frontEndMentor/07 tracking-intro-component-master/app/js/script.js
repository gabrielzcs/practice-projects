const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu-hide");
  closeMenu.classList.add("close-menu-show");

  nav.classList.add("nav__show");
});

closeMenu.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hamburger-menu-hide");
  closeMenu.classList.remove("close-menu-show");

  nav.classList.remove("nav__show");
});

window.onresize = function () {
  if (window.outerWidth < 699) {
    closeMenu.classList.remove("close-menu-show");
    nav.classList.remove("nav__show");
    hamburgerMenu.classList.remove("hamburger-menu-hide");
  }
};
