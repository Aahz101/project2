const searchContainer = document.getElementById(".js-search-container");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
let resultsContainer = document.getElementById("output");
let limit = document.getElementById("img-count-id");
let searchTerm = document.getElementById("search-box");
const apiurl = "http://api.giphy.com/v1/gifs/search";
const apiKey = "rJs1dhQNXII3vND3b8amLn6LwHSb35IW";

function setValues() {
  searchTerm = document.getElementById("search-box").value;
  limit = document.getElementById("img-count-id").value;
}

async function searchClicked(event) {
  event.preventDefault();
  setValues();

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}`
    );
    const data = await response.json();
    renderImages(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

function renderImages(data) {
  resultsContainer.innerHTML = ""; // Clear previous results
  const gifs = data.data;

  gifs.map((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    img.alt = gif.title;
    img.style.margin = "10px";
    img.style.width = "200px"; // Optional: Set a fixed width
    resultsContainer.appendChild(img);
  });
}

searchBtn.addEventListener("click", searchClicked);
