




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

// Carousel

async function wpData() {
  const response = await fetch("https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed");
  const Data = await response.json();
  console.log(Data);
}

wpData()
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};
next.onclick = function() {plusSlides(+1);}
prev.onclick = function() {plusSlides(-1);}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}


/*
async function wpData() {
  const response = await fetch("https://www.linn-eksamen.com/wp-json/wp/v2/posts/43?_embed");
  const Data = await response.json();
  console.log(Data);


  const test = document.querySelector(".test");
  const image = Data._embedded["wp:featuredmedia"][0].source_url;
  const text = Data.title.rendered;


test.innerHTML = `
<img src="${image}" alt="">
<h3>${text}</h3>
`
}
wpData()

*/


// const name = Data._embedded.author[0].name; = author name