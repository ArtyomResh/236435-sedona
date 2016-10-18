var modalOverlay = document.querySelector(".modal__overlay");
var modal = document.querySelectorAll(".modal");
var btnClose = document.querySelectorAll(".modal__btn");

for (i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", function (event) {
    for (j = 0; j < modal.length; j++) {
      if (!modal[j].classList.contains("modal--hidden")) {
        modal[j].classList.add("modal--hidden");
        modalOverlay.classList.add("modal__overlay--hidden");
      }
    }
  })
};

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    for (j = 0; j < modal.length; j++) {
      if (!modal[j].classList.contains("modal--hidden")) {
        modal[j].classList.add("modal--hidden");
        modalOverlay.classList.add("modal__overlay--hidden");
      }
    }
  }
});


modalOverlay.addEventListener("click", function(event) {
  if (!modalOverlay.classList.contains("modal__overlay--hidden")) {
    for (j = 0; j < modal.length; j++) {
      if (!modal[j].classList.contains("modal--hidden")) {
        modal[j].classList.add("modal--hidden");
        modalOverlay.classList.add("modal__overlay--hidden");
      }
    }
  }
})
