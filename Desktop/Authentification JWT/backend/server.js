require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
require('./config/oauth');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});