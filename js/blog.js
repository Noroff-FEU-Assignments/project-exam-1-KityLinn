import {makeRequest, fetchById} from "./export.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



const post = document.querySelector(".post-section");

function renderSingle (singlePost) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");
    postContainer.innerHTML =
    `<h2>${singlePost.title.rendered}</h2>
    <div class="post-image" id="modal-trigger">
         <img src="${singlePost._embedded["wp:featuredmedia"][0].source_url}" alt="${singlePost.title.rendered}">
    </div>
    <div class="text-box">
         <p>${singlePost.content.rendered}</p>
    </div>
<div id="image-modal" class="modal">
     <div class="modal-content">
       <img src="${singlePost._embedded["wp:featuredmedia"][0].source_url}" alt="${singlePost.title.rendered}">
     </div>

</div>`
    post.appendChild(postContainer);
    const modalTrigger = document.querySelector("#modal-trigger");
    const imageModal = document.querySelector("#image-modal");

    modalTrigger.onclick = function() {
       imageModal.style.display = "block";

     window.onclick = function(event) {
          if (event.target == imageModal) {
            imageModal.style.display = "none";
          }
        }
   }; 
};

makeRequest(fetchById(id),renderSingle);


   
