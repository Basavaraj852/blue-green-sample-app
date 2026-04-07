const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from GREEN version (v2)');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Green app running on port ${port}`);
});
