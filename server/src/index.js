const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  console.log(req.body);
  res.json("success");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});