export const main_url = "https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed";
export const errorMsg = "There was an error";

export const makeRequest = async (url, renderFunction, attach) => {
    let res;
    if (!res) {
        attach.innerHTML =loadingIndic;
    }
    try {
        res = await fetch(url);
        const data = await res.json();
        renderFunction(data);
    } catch (error) {
        attach.innerHTML = errorMsg + error;
    }
}; 

/*
export async function wpData() {
    const response = await fetch("https://www.linn-eksamen.com/wp-json/wp/v2/posts?_embed");
    const Data = await response.json();
    console.log(Data);
  }

 wpData()
 */