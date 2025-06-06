function displayPlaylists(){
    const container = document.querySelector(".playlist-cards");
    container.innerHTML = '';
 
    data.playlists.forEach(playlist => {
        const card = document.createElement("div");
        card.classList.add("playlist");
        card.innerHTML = `
        <img src="${playlist.playlist_art}">
        <div class="playlist-info">
            <h5>${playlist.playlist_name}</h5>
            <h6>Created by ${playlist.playlist_creator}</h6>
            <div class="playlist-icons">
                <div>
                    <i class="fa fa-heart-o"></i>
                    <span>${playlist.likeCount}</span>
                </div>
                <div>
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"></i>
                </div>
            </div>
 
        </div>
        `;
        container.appendChild(card);
 
        card.addEventListener("click", (event) => {
            const newLikeIcon = document.createElement("i");
            newLikeIcon.classList.add("fa", "fa-heart");
            newLikeIcon.style.color = "red";
 
            if(event.target.classList.contains('fa-heart-o')){
 
 
                event.target.parentNode.replaceChild(newLikeIcon, event.target);
                playlist.likeCount++;
                const likeCountSpan = card.querySelector('.playlist-info span');
                likeCountSpan.textContent = playlist.likeCount;
 
            } else if(event.target.classList.contains('fa-heart')){
                const oldLikeIcon = document.createElement("i");
                oldLikeIcon.classList.add("fa", "fa-heart-o");
                event.target.parentNode.replaceChild(oldLikeIcon, event.target);
                playlist.likeCount--;
                const likeCountSpan = card.querySelector('.playlist-info span');
                likeCountSpan.textContent = playlist.likeCount;
 
 
            } else if(event.target.classList.contains('fa-trash-o')){
                card.remove();
            } else if(event.target.classList.contains('fa-edit')){
                function displayEditForm(playlistID){
                    // const playlist = data.playlists.find(playlist => playlist.id === playlistID);
 
                    // console.log(event.target);
                    const modal = document.querySelector('#edit-playlist-form');
                    const modalContent = document.querySelector('#edit-content');
                    modalContent.innerHTML = `
 
                        <div class="m">
                            <div>
                                <input type="text" id="edit-playlist-name" name="playlist-name" placeholder="Playlist Name" value="${playlist.playlist_name}"><br>
                                <input type="text" id="edit-playlist-creator" name="playlist-creator" placeholder="Playlist Creator" value="${playlist.playlist_creator}"><br>
                                <input type="url" id="edit-playlist-cover-art" name="playlist-cover-art" placeholder="Playlist Cover Art Link" value="${playlist.playlist_art}"><br><br>
                            </div>
 
                            <span class="close-edit">&times;</span>
                        </div>
 
 
                        <h3>Song Details:</h3>
                        <div id="songs-container">`
 
 
                        playlist.songs.forEach(song => {
                            modalContent.innerHTML +=
                            `<div class="song">
                                <input type="text" id="edit-song-name" name="song-name" placeholder="Song Name" value="${song.title}"><br>
 
                                <input type="text" id="edit-song-artist" name="song-artist" placeholder="Artist Name" value="${song.artist}"><br>
                                <input type="text" id="edit-album-name" name="album-name" placeholder="Album Name" value="${song.album}"><br>
                                <input type="url" id="edit-song-cover-art" name="song-cover-art" placeholder="Song Cover Art Link" value="${song.cover_art}"><br>
                                <input type="text" id="edit-song-duration" name="song-duration" placeholder="Song Duration" value="${song.duration}"><br>
 
                            </div>
                           `
 
                        })
                        modalContent.innerHTML += `
 
 
 
 
                        </div>
 
                        <input type="submit" id="edit-submit-button" value="Submit Edit">
                    `;
                    modal.style.display = 'block';
                    const cancelButton = document.querySelector('.close-edit');
                    cancelButton.addEventListener('click', () => {
                            const modal = document.querySelector('#edit-playlist-form');
                            console.log(modal.style.display);
                            modal.style.display = 'none';
                    });
 
                    const submitButton = document.querySelector('#edit-submit-button');
                    submitButton.addEventListener('click', (event) => {
                        console.log(event.target);
                        event.preventDefault();
                        const playlistName = document.getElementById('edit-playlist-name').value;
                        const playlistCreator = document.getElementById('edit-playlist-creator').value;
                        const playlistCoverArt = document.getElementById('edit-playlist-cover-art').value;
                        const songName = document.getElementById('edit-song-name').value;
                        const songArtist = document.getElementById('edit-song-artist').value;
                        const albumName = document.getElementById('edit-album-name').value;
                        const songCoverArt = document.getElementById('edit-song-cover-art').value;
                        const songDuration = document.getElementById('edit-song-duration').value;
 
                        const newPlaylist = {
                            playlistID: playlist.playlistID,
                            playlist_name: playlistName,
                            playlist_creator: playlistCreator,
                            playlist__art: playlistCoverArt,
                            likeCount: playlist.likeCount,
                            songs: [
                                {
                                    songID: playlist.songs.length++,
                                    title: songName,
                                    artist: songArtist,
                                    album: albumName,
                                    cover_art: songCoverArt,
                                    duration: songDuration
                                }
                            ]
 
                        }
 
                        data.playlists[data.playlists.indexOf(playlist)] = newPlaylist;
 
                        displayPlaylists();
 
                        modal.style.display = 'none';
 
                    });
 
                }
                displayEditForm(playlist.playlistID);
        }else{
                populateModal(playlist);
 
            }
        });
 
 
 
    });
 
}

const cancelButton = document.querySelector('.close');
cancelButton.addEventListener('click', () => {
    const modal = document.querySelector('#add-playlist-form');
    console.log(modal.style.display);
    modal.style.display = 'none';
});
 
const cancelButton2 = document.querySelector('.close');
cancelButton.addEventListener('click', () => {
    const modal = document.querySelector('#edit-playlist-form');
    console.log(modal.style.display);
    modal.style.display = 'none';
});
 
const addPlaylistButton = document.querySelector('.fa-plus');
addPlaylistButton.addEventListener('click', () => {
    const modal = document.querySelector('#add-playlist-form');
    modal.style.display = 'block';
 
 
});
 
const songsContainer = document.querySelector('#songs-container');
const addSongButton = document.querySelector('#add-song-button');
addSongButton.addEventListener('click', () => {
 
    const newSongFields = document.createElement('div');
    newSongFields.classList.add('song');
    newSongFields.innerHTML = `
    <input type="text" id="song-name" name="song-name" placeholder="Song Name"><br>
 
    <input type="text" id="song-artist" name="song-artist" placeholder="Artist Name"><br>
    <input type="text" id="album-name" name="album-name" placeholder="Album Name"><br>
    <input type="url" id="song-cover-art" name="song-cover-art" placeholder="Song Cover Art Link"><br>
    <input type="text" id="song-duration" name="song-duration" placeholder="Song Duration"><br>
    `;
    songsContainer.appendChild(newSongFields);
 
});
 
const addModal = document.querySelector('#add-playlist-form');
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const playlistName = document.getElementById('playlist-name').value;
    const playlistCreator = document.getElementById('playlist-creator').value;
    const playlistCoverArt = document.getElementById('playlist-cover-art').value;
    const songName = document.getElementById('song-name').value;
    const songArtist = document.getElementById('song-artist').value;
    const albumName = document.getElementById('album-name').value;
    const songCoverArt = document.getElementById('song-cover-art').value;
    const songDuration = document.getElementById('song-duration').value;
 
 
    const newPlaylist = {
        playlistID: data.playlists.length++,
        playlist_name: playlistName,
        playlist_creator: playlistCreator,
        playlist__art: playlistCoverArt,
        likeCount: 0,
        songs: [
        {
            songID: data.playlists[8].songs.length++,
            title: songName,
            artist: songArtist,
            album: albumName,
            cover_art: songCoverArt,
            duration: songDuration
 
        }
        ]
    }
    data.playlists.push(newPlaylist);
    displayPlaylists();
 
    addModal.style.display = 'none';
 
});
 
function populateModal(playlist) {
 
 
    const modal = document.querySelector('.modal-content');
    modal.innerHTML = '';
    const modalHeading = document.createElement("div")
    modalHeading.classList.add('modal-heading');
    modalHeading.innerHTML = `
    <img src="${playlist.playlist_art}">
 
    <div class="playlist-info">
        <h3>${playlist.playlist_name}</h3>
        <h5>Created by ${playlist.playlist_creator}</h5>
 
    </div>
    <span class="close">&times;</span>
 
    `;
    modal.appendChild(modalHeading);
 
    modal.innerHTML += `<button class="btn">Shuffle</button>`
 
    const shuffleButton = document.querySelector('.btn');
    shuffleButton.addEventListener('click', () => {
 
        const shuffledSongs = shuffleArray(playlist.songs);
        playlist.songs = shuffledSongs;
 
 
        const songCards = document.querySelector('.song-cards');
        songCards.innerHTML = '';
        shuffledSongs.forEach(song => {
            const song_det = document.createElement("div");
            song_det.classList.add('song');
            song_det.innerHTML = `
                <img src=${song.cover_art}>
                <div class="song-info">
                    <p class="song-title">${song.title}</p>
                    <p>${song.artist}</p>
                    <p>${song.album}</p>
                </div>
                <span>${song.duration}</span>
            `;
            songCards.appendChild(song_det);
        });
    });
    const songCards = document.createElement("div");
    songCards.classList.add('song-cards');
    playlist.songs.forEach(song => {
        const song_det = document.createElement("div");
        song_det.classList.add('song');
        song_det.innerHTML = `
        <img src=${song.cover_art}>
        <div class="song-info">
            <p class="song-title">${song.title}</p>
            <p>${song.artist}</p>
            <p>${song.album}</p>
        </div>
        <span>${song.duration}</span>
        `;
        songCards.appendChild(song_det);
    });
    modal.appendChild(songCards);
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'block';
    const cancelButton = document.querySelector('.close');
    cancelButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const playlists = document.querySelectorAll('.playlist');
    console.log(playlists)
    playlists.forEach(playlist => {
        const playlistName = playlist.querySelector('.playlist-info h5').textContent.toLowerCase();
        const playlistCreator = playlist.querySelector('.playlist-info h6').textContent.toLowerCase();
        if(playlistName.includes(searchTerm) || playlistCreator.includes(searchTerm)){
            playlist.style.display = 'block';
        } else {
            playlist.style.display = 'none';
        }
    });
});

const sortOption = document.querySelector('#choice');
sortOption.addEventListener('change', (event) => {
    const sortBy = event.target.value;
    const playlistContainer = document.querySelector('.playlist-cards')
    const playlists = Array.from(document.querySelectorAll('.playlist'));
    console.log(playlists)
    if(sortBy=== 'playlist-name'){
        playlists.sort((a,b) => {
            const nameA = a.querySelector('.playlist-info h5').textContent.trim().toLowerCase();
            const nameB = b.querySelector('.playlist-info h5').textContent.trim().toLowerCase();
            return nameA.localeCompare(nameB)
        })
    } else if(sortBy === 'likes'){
        playlists.sort((a,b) => {
            const likesA = parseInt(a.querySelector('span').textContent.trim());
            const likesB = parseInt(b.querySelector('span').textContent.trim());
            return likesA - likesB;
        })
    }
    playlists.forEach(playlist => {
        playlistContainer.appendChild(playlist)
    })
});

displayPlaylists();