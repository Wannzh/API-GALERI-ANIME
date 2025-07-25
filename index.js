// server.js
const express = require("express");
const cors = require("cors");
const app = express();

const dataAnime = require("./objectFarid");
// console.log("Data dari data.js:", apiData )
const PORT = process.env.PORT || 3000;

app.use(cors()); // agar bisa diakses dari frontend
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Galeri Anime, Created by Farid");
});

app.get('/api/anime', (req, res) => {
  res.json(dataAnime);
});

app.get('/api/anime/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const anime = dataAnime.find(item => item.id === id);

  if (!anime) {
    return res.status(404).json({ message: "Anime tidak ditemukan" });
  }

  res.json(anime);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
