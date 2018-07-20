$(document).ready(function() {

    // DONE - Use jQuery to get a reference to `load-songs`
let loadSongs = $("#load-songs")
    // DONE - Use jQuery to get a reference to `song-list`
let songList = $("#song-list")

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
$(loadSongs).click(function(){
    songList.empty()
    $.ajax({url: "songs.json", method: "GET"})
    .then(response => response.songs.forEach(song => 
    songList.append(`<section class="song"><h1 class="song_title">${song.title}</h1><p class="song_artist">${song.artist}</p><p class="song_album">${song.album}</p><section>`)))
})

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})