const btnMenu = document.querySelector(".btn_menu");
const overlay = document.querySelector(".overlay");

// TODO: 선택했을 때, 다른 곳을 눌렀을 때 닫힘 처리
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  overlay.classList.toggle("show");
});
