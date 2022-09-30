const btn = document.querySelector("#menu-btn");
const navList = document.querySelector("#menu");
btn.addEventListener("click", () => {
  document.querySelector("#img").src = "../images/icon-close.svg";

  console.log("open");
  btn.classList.toggle(".open");
  navList.classList.toggle("hide");
});

const ham = document.querySelector('.ham');
ham.addEventListener("click",() => {
document.querySelector('.ham').src = "../images/icon-hamburger.svg"
})