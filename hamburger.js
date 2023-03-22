var open = document.querySelector(".hamburger__img");
var close = document.querySelector(".closexbtn");
var wrapper = document.querySelector(".hamburgerMenu");

open.addEventListener("click", function () {
  wrapper.classList.toggle("hamburgerMenu-active");
});

close.addEventListener("click", function () {
  wrapper.classList.toggle("hamburgerMenu-active");
});
