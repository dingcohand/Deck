const btnMenu = document.querySelector(".btn_menu");
const smList = document.querySelector(".sm_list");
const overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", () => {
  toggleSmMenu();
});

smList.addEventListener("click", () => {
  toggleSmMenu();
});

overlay.addEventListener("click", () => {
  toggleSmMenu();
});

function toggleSmMenu() {
  btnMenu.classList.toggle("active");
  overlay.classList.toggle("show");
}
