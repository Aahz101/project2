const searchContainer = document.getElementById(".js-search-container");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const resultsContainer = document.getElementById(".js-results-container");
const limit = document.getElementById("img-count-id");
const apiurl = "http://api.giphy.com/v1/gifs/search";
const apiKey = "rJs1dhQNXII3vND3b8amLn6LwHSb35IW";


async function searchClicked(event) {
  event.preventDefault();
 
  let searchDoc = await fetch(`https://api.giphy.com/v1/gifs/search?q=dog&api_key=${apiKey}&limit=${limit}`)
console.log(searchDoc);
}

      
searchBtn.addEventListener("click", searchClicked);
