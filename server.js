const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/:id', express.static(path.join(__dirname, 'Public')));

// app.use(express.static())

// app.use('/')

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});