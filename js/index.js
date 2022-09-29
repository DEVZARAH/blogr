const btn = document.querySelector("#menu-btn");
const navList = document.querySelector("#menu");
btn.addEventListener("click", () => {
    console.log('open');
  btn.classList.toggle(".open");
  navList.classList.toggle("hide");
});
