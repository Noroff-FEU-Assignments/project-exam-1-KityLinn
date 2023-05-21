import {makeRequest, fetchById} from "./export.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
makeRequest(fetchById(id),renderSingle);


const post = document.querySelector(".post-section");

function renderSingle (singePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-containe");
    postContainer.innerHTML =
    `<h2>${singePost.title.rendered}</h2>
    <img src="${singePost._embedded["wp:featuredmedia"][0].source_url}" alt="${singePost.title.rendered}">
    <p>${singePost.content.rendered}</p>`
    post.appendChild(postContainer)
};
