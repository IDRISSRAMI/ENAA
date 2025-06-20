
const mongoose=require('mongoose')
const db=new mongoose.Schema({
    nom: {
        type: String,
        required: true,  // Le champ 'nom' est requis
      },
      email: {
        type: String,
        required: true,
        unique: true,  // L'email doit être unique
        lowercase: true,  // Convertir automatiquement en minuscules
      },
      phone: {
        type: Number,
        required: true,  // Le champ 'nom' est requis
      },
      message: {
        type: String,
        required: true,
        unique: true,  
        lowercase: true,  
      },
})
const ConNect=mongoose.model('contact',db)
module.exports = ConNect