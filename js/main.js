const searchContainer = document.getElementById(".js-search-container");
const searchForm = document.getElementById("search-form");
const resultsContainer = document.getElementById(".js-results-container");

$.ajax({
    url: "test.api.giphy.com/v1/gifs/search	",
    context: document.body
  }).done(function() {
    $( this ).addClass( "done" );
  });

document.getElementById("Search").addEventListener("click", () => {
    const searchTerm = document.getElementById("search").value;
    const url = `api.giphy.com/v1/gifs/search${searchTerm}`;


});