const searchInput = document.getElementById('barra_pesquisa');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('musics_playlist');

function requestApi(searchTerm){
    const url = 'http://localhost:3000/artists?name_like=${searchTerm}'
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));

}

function displayResults(results){
    resultPlaylist.classList.add('hidden');
    const artistName = getElementById('artist-name');
    const artistImage = getElementById('artist-img');

    results.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })

    resultArtists.classList.remove("hidden");
}



document.addEventListener("input", function() {
    const searchTerm = searchInput.value.tolowerCase()
    if (searchTerm === "") {
        resultPlaylist.classList.add("hidden");
        resultArtists.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
});