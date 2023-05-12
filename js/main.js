/*
const url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts";
fetch(url, {
  method: "GET",
  headers: new Headers({
    Authorization: "Basic " + btoa(username + ":" + password),
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.error(error));
*/  


  
  async function wpData() {
    const response = await fetch("https://www.linn-eksamen.com/wp-json/wp/v2/posts");
    const Data = await response.json();
    console.log(Data);
  }

  wpData()


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