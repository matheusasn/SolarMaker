const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, './solarmaker/frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './solarmaker/frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
