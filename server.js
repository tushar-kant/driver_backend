// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config(); 



const driverRoutes = require('./routes/driverRoutes');
const maidRoutes = require('./routes/maidRoutes'); // Import maid routes


// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();


const PORT = process.env.PORT || 5000;

// Use driver routes
app.use('/api/drivers', driverRoutes);
app.use('/api/maids', maidRoutes); // Prefix routes with /api/maids


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
