const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Le nom est obligatoire']
  },
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire']
  },
  email: {
    type: String,
    required: [true, "L'email est obligatoire"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Veuillez entrer un email valide'
    ]
  },
  age: {
    type: Number
  },
  filiere: {
    type: String,
    enum: {
      values: ['Informatique', 'Mathématiques', 'Physique', 'Biologie'],
      message: '{VALUE} n\'est pas une filière valide'
    }
  },
  dateInscription: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Etudiant', etudiantSchema);
