const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Essaie de te connecter à MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/User", {
      useNewUrlParser: true,  // Ces options sont obsolètes mais peuvent encore être utilisées
      useUnifiedTopology: true,
    });
    console.log('MongoDB connecté');
  } catch (err) {
    // Si l'erreur persiste, logge les détails
    console.error('Erreur de connexion à MongoDB:', err.message);
    // Affiche aussi le stack trace pour plus de détails sur l'erreur
    console.error(err);
    process.exit(1);  // Arrête le processus si la connexion échoue
  }
};

module.exports = connectDB;
