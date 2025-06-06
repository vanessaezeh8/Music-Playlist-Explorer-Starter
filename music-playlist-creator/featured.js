function randomPlaylist(){
    const randomIndex = Math.floor(Math.random() * data.playlists.length);
    let randomPlaylist = data.playlists[randomIndex];
    return randomPlaylist;
}
function displayFeaturedHome(playlist){
    const featuredHome = document.querySelector('.featured-home');
    const featuredPlaylist = document.createElement('div');
    featuredPlaylist.classList.add('featured-playlist');
    featuredPlaylist.innerHTML =
    `
    <img src="${playlist.playlist_art}">
    <h1>${playlist.playlist_name}</h1>
    <p>Created by ${playlist.playlist_creator}</p>
    `
    featuredHome.appendChild(featuredPlaylist);
    const featuredSongs = document.createElement('div');
    featuredSongs.classList.add('featured-songs');
    playlist.songs.forEach(song => {
        const featuredSong = document.createElement('div');
        featuredSong.classList.add('featured-song');
        featuredSong.innerHTML = `
        <img src="${song.cover_art}">
        <div class="featured-song-info">
            <p>${song.title}</p>
            <p>${song.artist}</p>
            </div>
        </div>
        <span>${song.duration}</span>
        `
        featuredSongs.appendChild(featuredSong);
    });
    featuredHome.appendChild(featuredSongs);
}
const random_playlist = randomPlaylist();
displayFeaturedHome(random_playlist);