// Header menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".main-header .navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});
