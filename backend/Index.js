require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes'); // Import routes

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON request body
app.use(express.json())

// MongoDB connection using the connection string from .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Use product routes for the `/products` endpoint
app.use('/products', productRoutes);

// Set the port to 5000 or from the environment variable (e.g., for deployment)
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
