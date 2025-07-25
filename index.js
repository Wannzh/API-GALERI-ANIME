const express = require('express');
const app = express();
const port = 3000;

const { dataAnime } = require('./objectFarid');

app.get('/', (req, res) => {
  res.send("API Galei Anime, Created by Farid");
});

app.get('/api/anime', (req, res) => {
  res.json(dataAnime);
});

// Route detail anime berdasarkan ID
app.get('/api/anime/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const anime = dataAnime.find(item => item.id === id);

  if (!anime) {
    return res.status(404).json({ message: "Anime tidak ditemukan" });
  }

  res.json(anime);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})