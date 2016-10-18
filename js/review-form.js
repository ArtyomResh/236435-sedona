var submit = document.querySelector(".review-form__btn");

var firstname = document.querySelector("#firstname");
var surname = document.querySelector("#surname");
var patronymic = document.querySelector("#patronymic");
var tel = document.querySelector("#tel");
var email = document.querySelector("#email");
var commentary = document.querySelector("#commentary");

var storageFirstname = localStorage.getItem("firstname");
var storageSurname = localStorage.getItem("surname");
var storagePatronymic = localStorage.getItem("patronymic");
var storageTel = localStorage.getItem("tel");
var storageEmail = localStorage.getItem("email");

var modalOverlay = document.querySelector(".modal__overlay");
var modalError = document.querySelector(".modal--error");
var modalSuccess = document.querySelector(".modal--success");

submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (!firstname.value || !surname.value || !patronymic.value || !commentary.value) {
    modalOverlay.classList.remove("modal__overlay--hidden");
    modalError.classList.remove("modal--hidden");
  } else {
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("surname", surname.value);
    localStorage.setItem("patronymic", patronymic.value);
    localStorage.setItem("tel", tel.value);
    localStorage.setItem("email", email.value);
    modalOverlay.classList.remove("modal__overlay--hidden");
    modalSuccess.classList.remove("modal--hidden");
  }
});

window.addEventListener("load", function(event) {
  firstname.value = storageFirstname;
  surname.value = storageSurname;
  patronymic.value = storagePatronymic;
  tel.value = storageTel;
  email.value = storageEmail;
});
