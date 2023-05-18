export const main_url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed&per_page=12";
export const carousel_url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed&per_page=8";
//const fetchbyId = `https://www.linn-eksamen.com/wp-json/wp/v2/posts/${id}?_embed`;

function fetchById(id) {
    return `https://www.linn-eksamen.com/wp-json/wp/v2/posts/${id}?_embed;`
   }
export const errorMsg = "There was an error ";



/*
 async function wpData() {
    const response = await fetch("https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed");
    const Data = await response.json();
    console.log(Data);
  }

 wpData()
 
 export const data = wpData();

*/
export async function makeRequest(url, renderFunction) {
    try {
        let res = await fetch(url);
        const data = await res.json();
        renderFunction(data);
    } catch (error) {
        console.log( error);
    }
};