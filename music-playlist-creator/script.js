import playlists from "./data/data.js";

const heartIcon = `<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d71d1d" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
const heartIconPlain = `<svg class="heart-icon-plain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>fklduklifivdbbvttdggjilikcjrvrhbjlbtdkrinnddcecgfjbivfrddrdbbvibnlkdlhrufjjlgddffhicfnjbkbjjjktc`;
const edit = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.3 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z"/></svg>`;
const trash = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
function displayPlaylists() {
  const container = document.querySelector(".playlist-cards");
  if (!container) return;
  container.innerHTML = "";
  playlists.forEach((playlist) => {
    const card = document.createElement("div");
    card.classList.add("playlist");
    card.innerHTML = `
            <img src="${playlist.playlist_art}" />
            <div class="playlist-info">
                <h5>${playlist.playlist_name}</h5>
                <h6>created by ${playlist.playlist_author}</h6>
                <div class="playlist-icons">
                    <div class="like-section">
                        <div class="heart-container" style="cursor: pointer;">
                            <div class="heart-icon-filled" style="display: none;">${heartIcon}</div>
                            <div class="heart-icon-plain">${heartIconPlain}</div>
                        </div>
                        <span class="like-count">${playlist.likeCount}</span>
                    </div>

                    <div class="action-icons">
                        ${edit}
                        ${trash}
                    </div>
                </div>
            </div>
        `;
    container.appendChild(card);
    // Like button logic
    const likeSection = card.querySelector(".like-section");
    const heartContainer = likeSection.querySelector(".heart-container");
    const filledHeart = heartContainer.querySelector(".heart-icon-filled");
    const plainHeart = heartContainer.querySelector(".heart-icon-plain");
    const likeCountSpan = likeSection.querySelector(".like-count");

    let liked = false;

    heartContainer.addEventListener("click", () => {
      liked = !liked;

      if (liked) {
        filledHeart.style.display = "block";
        plainHeart.style.display = "none";
        playlist.likeCount++;
      } else {
        filledHeart.style.display = "none";
        plainHeart.style.display = "block";
        playlist.likeCount--;
      }

      likeCountSpan.textContent = playlist.likeCount;
    });

    card.querySelector("img").addEventListener("click", () => {
      openModal(playlist);
    });
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
}
function resetLikes() {
  playlists.forEach((playlist) => (playlist.likeCount = 0));
  displayPlaylists();
}
document.addEventListener("DOMContentLoaded", () => {
  displayPlaylists();
  const resetBtn = document.getElementById("resetLikesBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetLikes);
  }
});

const modal = document.getElementById("playlistModal");
function openModal(playlist) {
  const modal = document.getElementById("playlistModal");
  if (!modal) {
    console.error("Modal element not found!");
    return;
  }
  const modalPlaylistArt = document.getElementById("modalPlaylistArt");
  const modalPlaylistName = document.getElementById("modalPlaylistName");
  const modalPlaylistAuthor = document.getElementById("modalPlaylistAuthor");
  const modalPlaylistLikes = document.getElementById("modalPlaylistLikes");

  if (
    !modalPlaylistArt ||
    !modalPlaylistName ||
    !modalPlaylistAuthor ||
    !modalPlaylistLikes
  ) {
    console.error("Modal elements not found!");
    return;
  }
  modalPlaylistArt.src = playlist.playlist_art;
  modalPlaylistArt.alt = `Artwork of ${playlist.playlist_name}`;
  modalPlaylistName.innerText = playlist.playlist_name;
  modalPlaylistAuthor.innerText = playlist.playlist_author;
  modalPlaylistLikes.innerText = playlist.likeCount;

  modal.style.display = "block";
}
function populateModal(playlist) {
  const modal = document.getElementById("playlistModal");
  const modalContent = modal.querySelector('.modal-content');
  modalContent.innerHTML = ``;

  const modalHeading = document.createElement("div");
  modalHeading.classList.add('modal-heading');
  modalHeading.innerHTML = `
    <img src="${playlist.playlist_art}">
    <div class="playlist-info">
      <h3>${playlist.playlist_name}</h3>
      <h5>Created by ${playlist.playlist_author}</h5>
    </div>
    <span class="close">&times;</span>
  `;
  modalContent.appendChild(modalHeading);

  const shuffleButton = document.createElement("button");
  shuffleButton.classList.add('btn');
  shuffleButton.textContent = "Shuffle";
  modalContent.appendChild(shuffleButton);

  const songCards = document.createElement("div");
  songCards.classList.add("song-cards");

  playlist.song.forEach(song => {
    const song_det = document.createElement("div");
    song_det.classList.add("song");
    song_det.innerHTML = `
      <img src="${song.cover_art}">
      <div class="song-info">
        <p class="song-title">${song.title}</p>
        <p>${song.artist}</p>
        <p>${song.album}</p>
      </div>
      <span>${song.duration}</span>
    `;
    songCards.appendChild(song_det);
  });

  modalContent.appendChild(songCards);
  modal.style.display = "block";

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  shuffleButton.addEventListener("click", () => {
    const shuffledSongs = shuffleArray([...playlist.song]);
    playlist.song = shuffledSongs;

    songCards.innerHTML = '';
    shuffledSongs.forEach(song => {
      const song_det = document.createElement("div");
      song_det.classList.add("song");
      song_det.innerHTML = `
        <img src="${song.cover_art}">
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
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}
