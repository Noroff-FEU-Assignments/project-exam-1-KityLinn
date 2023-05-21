import {makeRequest, fetchById} from "./export.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const post = document.querySelector(".post-section");

function renderSingle (singlePost) {
    console.log(singlePost)
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");
    postContainer.innerHTML =
    `<h2>${singlePost.title.rendered}</h2>
    <div class="post-image">
         <img src="${singlePost._embedded["wp:featuredmedia"][0].source_url}" alt="${singlePost.title.rendered}">
    </div>
    <div class="text-box">
         <p>${singlePost.content.rendered}</p>
    </div>`
    post.appendChild(postContainer)
};

makeRequest(fetchById(id),renderSingle);
