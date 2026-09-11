document.addEventListener("DOMContentLoaded", () => {

const artistsData = [
    { name: "Henrique & Juliano", image: "img/artista-henrique-juliano.jpg" },
    { name: "Zé Neto & Cristiano", image: "img/artista-ze-neto.jpg" },
    { name: "Jorge & Mateus", image: "img/artista-jorge-mateus.jpg" },
    { name: "Matheus & Kauan", image: "img/artista-mateus-kauan.jpg" },
    { name: "Gusttavo Lima", image: "img/artista-gustavo-limma.jpg" },
    { name: "Luan Santana", image: "img/artista-luan-santana.jpg" },

  ]; 



const albumsData = [
    { name: "white Noise (Sleep & Relaxition Sounds)", artist: "Sleepy John", image: "img/album-white-noise.jpg" },
    { name: "O Céu Explica Tudo", artist: "Henrique & Juliano", image: "img/album-ceu-explica.jpg" },
    { name: "Nada como um dia após o outro", artist: "Racionais", image: "img/album-racionais.jpg" },
    { name: "HIT ME HARD AND SOFT   ", artist: "Billie Eilish", image: "img/album-hit-me.jpg" },
    { name: "CAJU", artist: "Liniker", image: "img/album-caju.jpg" },
    { name: "Escândalo íntimo", artist: "Luísa Sonza", image: "img/album-escandalo.jpg" },
    
  ]; 

   const artistGrid = document.querySelector(".artist-grid");
   const albumsGrid = document.querySelector(".albums-grid");
    

  artistsData.forEach( artist => {
    const artistCard = document.createElement("div")
    artistCard.classList.add("artist-card")

    artistCard.innerHTML = `
      <div class="artist-image">
      <img src="${artist.image}" alt="${artist.name}">
      <button class="play-button">
      <i class="fa-solid fa-play"></i>
    </button>
  </div>
      <div>
         <h3>${artist.name}</h3>
        <p>artista</p>
      </div>
    `
    
    artistGrid.appendChild(artistCard);

  })

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    albumCard.innerHTML = `
    <div class="album-image">
      <img src="${album.image}" alt="${album.name}">
      <button class="play-button">
      <i class="fa-solid fa-play"></i>
    </button>
  </div>
      <div>
          <h3>${album.name}</h3>
          <p>${album.artist}</p>
      </div>
    `
    
    albumsGrid.appendChild(albumCard);
  })
})



