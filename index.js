const express = require('express');
const cors = require('cors'); // ✅ Tambahkan ini
const app = express();

const { dataAnime } = require('./objectFarid');

app.use(cors()); // ✅ Pastikan ini dipanggil SETELAH cors diimpor

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
