const express = require('express');
const app = express();

// Middleware imports
const cors = require('./middleware/cors');
const auth = require('./middleware/auth');
const rateLimiter = require('./middleware/rateLimiter');
const logger = require('./middleware/logger');

// Config import
const config = require('./config/config');

// Routes import
const apiRoutes = require('./routes/apiRoutes');

// Middleware usage
app.use(cors);
app.use(auth);
app.use(rateLimiter);
app.use(logger);

// API Routes
app.use('/api', apiRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send({ message: 'API is running' });
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
