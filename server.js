const express = require('express');
const app = express();
const PORT = 3001; // Default port, configurable via your platform

app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Node.js app.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});