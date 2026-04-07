const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from BLUE version (v1)');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Blue app running on port ${port}`);
});
