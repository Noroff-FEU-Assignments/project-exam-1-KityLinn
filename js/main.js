import {makeRequest, carousel_url} from "./export.js";

// Carousel

const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
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
  slides[slideIndex-1].style.display = "flex";
}


// carousel render fuction

const slideShowContainer = document.querySelector('.slideshow-container')
//render for single card
const renderCard = (cardData) => {
  return`<div class="slide-box">
<a href="./blog-page.html?id=${cardData.id}" class="slide-link">
<div class="slide-box-img">
   <img src="${cardData._embedded["wp:featuredmedia"][0].source_url}" alt="${cardData.title.rendered}">
</div>
<h3>${cardData.title.rendered}</h3>
</a>
</div>`
};


// divides array into 2 sets of 4
const listRequestComplete = (data) => {
  var numberPerSlide = 4;
  var slideArray = [];
  //splitting the data into smaller arrays
  for (var i = 0; i < Math.ceil(data.length/numberPerSlide); i++) {
    slideArray.push(data.slice(i*numberPerSlide, (i+1)*numberPerSlide));
};
// render slides
var slides = ""
slideArray.forEach((cardArray)=> {
  slides+= '<div class="mySlides fade">';
  cardArray.forEach(cardData =>{
    slides+=renderCard(cardData)

  });
  slides+='</div>';

});
slideShowContainer.innerHTML =slides;
showSlides(1);
};
makeRequest(carousel_url, listRequestComplete);
