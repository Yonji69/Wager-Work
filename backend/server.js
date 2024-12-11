const express = require('express');
const cors = require('cors'); // To allow communication between frontend and backend
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse incoming JSON requests

// Example route
app.get('/', (req, res) => {
    res.send( 'Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
