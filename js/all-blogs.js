import {makeRequest, pageUrl} from "./export.js";

var currentPage = 1;

function getMorePosts() {
  makeRequest(pageUrl(currentPage++), renderList); //denne gir neste sidetall til url function i andre filen
};

function renderList(blogArray) {
  //for all posts in blogArray, insert the html into the page at the correct place
  var listElement = document.querySelector('.blogs-container');//finn hvor det skal settes inn
  blogArray.forEach(post => {
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");
    blogPost.innerHTML =
    `<a href="./blog-page.html?id=${post.id}" class="blog-post-link">
        <div class="blog-image-container">
            <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post.title.rendered}">
        </div>
        <h3>${post.title.rendered}</h3>
        ${post.excerpt.rendered}
    </a>`
    listElement.appendChild(blogPost)

  });

};
getMorePosts()

const seeMore = document.querySelector('.see-more-button');
seeMore.addEventListener("click", getMorePosts);
