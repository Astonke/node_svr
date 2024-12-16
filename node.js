const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 4000;

app.get('/products', async (req, res) => {
  try {
    const response = await fetch('https://nexafix.is-great.net/data');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
