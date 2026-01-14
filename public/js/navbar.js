// Header menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".main-header .navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}

// Global preloader hide on full page load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("preloader-hide");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
});
