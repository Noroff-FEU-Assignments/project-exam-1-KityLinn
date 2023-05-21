import {makeRequest, pageUrl} from "./export.js";

var currentPage = 1;
//først kan vi lage den som henter neste i listen
function getMorePosts() {
  makeRequest(pageUrl(currentPage++), renderList); //denne gir neste sidetall til url function i andre filen
};

function renderList(blogArray) {
  //for all posts in blogArray, insert the html into the page at the correct place
  var listElement = document.querySelector('.blogs-container')//finn hvor det skal settes inn
  blogArray.forEach(post => {
    //her må du sette verdier inn i htmlen for hver post 
    //og så append til listElement
  });
  ` <div class="blog-post">
      <a href="./blog-page.html?id=${blogArray.id}" class="blog-post-link">
          <h3>${blogArray.title.rendered}</h2>
          <div class="blog-image-container">
              <img src="${blogArray._embedded["wp:featuredmedia"][0].source_url}" alt="${blogArray.title.rendered}">>
          </div>
          <p>${blogArray.excerpt.rendered}</p>
      </a>
    </div>`
};