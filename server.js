const express = require('express');
const app = express();

// Variables to store sensor data
let co2 = 0;
let cfc = 0;

app.get('/sensor-data', (req, res) => {
  // Update sensor data from the Arduino request
  if (req.query.co2 && req.query.cfc) {
    co2 = req.query.co2;
    cfc = req.query.cfc;
    console.log(`CO2: ${co2} ppm, CFC: ${cfc} ppm`);
  }
  
  // Send the sensor data to the frontend
  res.json({ co2, cfc });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
