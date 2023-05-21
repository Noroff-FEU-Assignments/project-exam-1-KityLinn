export const main_url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed&per_page=12";
export const carousel_url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed&per_page=8";

export function fetchById(id) { //fetches by ID
    return `https://www.linn-eksamen.com/wp-json/wp/v2/posts/${id}?_embed`;
   };

export function pageUrl(page) { //denne returnerer url med rett nummer
    return `https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed&per_page=10&page=${page}`; 
  };

export const errorMsg = "There was an error ";


export async function makeRequest(url, renderFunction) {
    try {
        let res = await fetch(url);
        const data = await res.json();
        renderFunction(data);
    } catch (error) {
        console.log( error);
    }
};