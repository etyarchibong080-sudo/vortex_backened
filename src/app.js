// src/app.js
const express = require('express');
const app = express();
const { PORT } = require('./config/config');

app.use(express.json());

// Import Routes
const exampleRoutes = require('./routes/exampleRoutes');

// Use Routes
app.use('/api', exampleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
