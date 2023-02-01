var movieContainer = document.getElementById("tenMovies")
var latestBtn = document.getElementById("latest"); // getElementById from A2 source code
var allBtn = document.getElementById("all"); // getElementById from A2 source code


// Action listener for latest button
latestBtn.addEventListener("click", function() {
    var movieRequest = new XMLHttpRequest();
    movieRequest.open('GET', "static/data/movies.json", false)
    movieRequest.onload = function () {
        var movieData = JSON.parse(movieRequest.responseText);
        loadLatest(movieData);
    }
    movieRequest.send();
});
// Action listener for all button
allBtn.addEventListener("click", function() {
    var allRequest = new XMLHttpRequest();
    allRequest.open('GET', "static/data/movies.json", false)
    allRequest.onload = function () {
        var allData = JSON.parse(allRequest.responseText);
        allMovies(allData);
    }
    allRequest.send();
});
// When you click on load all, it repeats itself for some reason
// and I couldn't figure out why.
// Load all the Movies in the movies.json file
function allMovies(movie) {
    for(i = 0; i < movie.length; i++) {
       movieContainer.insertAdjacentHTML('beforeend', "<li>" + movie[i].title + "</li>");
    }
    document.getElementById('all').style.display='none';

}
// Load the latest movies (10 of them)
function loadLatest(movie) {
    for(i = 0; i < 10; i++) {
       movieContainer.insertAdjacentHTML('beforeend', "<li>" + movie[i].title + "</li>" );
    }
    document.getElementById('latest').style.display='none';
    document.getElementById('all').style.display=''; // To hide it until the latest movies are displayed
}
