const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".main-header .navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
}

const enrollBtnNav = document.querySelector(".enroll-btn-nav");
if (enrollBtnNav) {
  enrollBtnNav.addEventListener("click", () => {
    if (menuBtn && navigation && navigation.classList.contains("active")) {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    }
    window.location.href = "/courses";
  });
}

let preloaderHidden = false;

function hidePreloader() {
  if (preloaderHidden) return;
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloaderHidden = true;
    preloader.classList.add("preloader-hide");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }
}

window.addEventListener("DOMContentLoaded", hidePreloader);
window.addEventListener("load", hidePreloader);
setTimeout(hidePreloader, 2500);
