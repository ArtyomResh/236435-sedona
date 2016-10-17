var menuOpen = document.querySelector(".header-main__burger");
var menuClose = document.querySelector(".header-main__close");
var nav = document.querySelector(".header-main__nav");

function navLoad() {
  if (window.innerWidth < 768) {
    nav.classList.add("header-main__nav--hidden");
    menuOpen.classList.remove("header-main__burger--nojs");
    menuClose.classList.remove("header-main__close--nojs");
  }
}

function navResize() {
  if (window.innerWidth < 768) {
    nav.classList.add("header-main__nav--hidden");
    menuOpen.classList.remove("header-main__burger--nojs");
    menuOpen.classList.remove("header-main__burger--hidden");
    menuClose.classList.remove("header-main__close--nojs");
    menuClose.classList.remove("header-main__close--hidden");
} else {
    nav.classList.remove("header-main__nav--hidden");
    menuClose.classList.add("header-main__close--hidden");
    menuOpen.classList.add("header-main__burger--hidden");
  }
}

document.documentElement.onload = navLoad();
window.onresize = navResize;

menuOpen.addEventListener("click", function (event) {
  nav.classList.remove("header-main__nav--hidden");
  menuOpen.classList.add("header-main__burger--hidden");
});

menuClose.addEventListener("click", function (event) {
  nav.classList.add("header-main__nav--hidden");
  menuOpen.classList.remove("header-main__burger--hidden");
});
