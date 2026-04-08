const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Charger les routes
const etudiants = require('./routes/etudiantRoutes');

// Utiliser les routes
app.use('/api/etudiants', etudiants);

// Route de base
app.get('/', (req, res) => {
  res.send('API de Gestion des Étudiants en marche...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé en mode ${process.env.NODE_ENV || 'développement'} sur le port ${PORT}`);
});
