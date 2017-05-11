var link = document.querySelector(".button-address");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var cash_name = localStorage.getItem("login");
var cash_email = localStorage.getItem("email");
var overlay = document.querySelector(".modal-overlay");
link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (cash_name) {
    login.value = cash_name;
    email.focus();
  }
  if (cash_email) {
    email.value = cash_email;
    comment.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-content-error");
  overlay.classList.remove("modal-overlay-show");
});
form.addEventListener("submit", function(event){
  event.preventDefault();
  if (!login.value || !email.value || !comment.value){
    event.preventDefault();
    popup.classList.add("modal-content-error");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    if (popup.classList.contains("modal-content-show")){
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-content-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
})
