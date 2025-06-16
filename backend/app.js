const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Podstawowa trasa testowa
app.get('/', (req, res) => {
	res.json({ message: 'Witaj w API!' });
});

module.exports = app;
