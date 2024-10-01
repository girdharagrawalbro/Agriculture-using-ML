// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'  // Allow only your React app
}));


// This will call the Python Flask API
app.post('/api/predict', async (req, res) => {
  const soilData = req.body;
  
  try {
    const response = await axios.post('http://localhost:5000/predict', soilData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error in prediction');
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
