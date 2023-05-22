// Hamburger menu

const mobNav = document.querySelector(".mobile-burger");
const mobItems = document.querySelectorAll(".mob-item");
const mobButton= document.querySelector(".mob-button");
const closeIcon= document.querySelector(".fa-xmark");
const openIcon = document.querySelector(".fa-bars");

function toggleMenu() {
  if (mobNav.classList.contains("showMenu")) {
    mobNav.classList.remove("showMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  } else {
    mobNav.classList.add("showMenu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  }
}

mobButton.addEventListener("click", toggleMenu);

mobItems.forEach( 
  function(mobItems) { 
    mobItems.addEventListener("click", toggleMenu);
  }
)
