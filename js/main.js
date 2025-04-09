const searchContainer = document.getElementById(".js-search-container");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const resultsContainer = document.getElementById(".js-results-container");
let limit = document.getElementById("img-count-id");
let searchTerm = document.getElementById("search-box");
const apiurl = "http://api.giphy.com/v1/gifs/search";
const apiKey = "rJs1dhQNXII3vND3b8amLn6LwHSb35IW";

function setValues()
{
  searchTerm = document.getElementById("search-box").value;
  limit = document.getElementById("img-count-id").value;
}

async function searchClicked(event) {
  event.preventDefault();
  setValues();
 
  let searchDoc = await fetch(`https://api.giphy.com/v1/gifs/search?q=dog&api_key=${apiKey}&limit=${limit}`)
console.log(searchDoc);
let images = searchDoc.images;
resultsContainer. renderImages(images);
}

function renderImages(images) {

}      


searchBtn.addEventListener("click", searchClicked);
