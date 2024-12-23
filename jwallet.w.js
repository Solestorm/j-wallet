const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.json({ message: "Server is running!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 