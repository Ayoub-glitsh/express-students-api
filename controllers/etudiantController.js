const Etudiant = require('../models/Etudiant');

// @desc    Lister tous les étudiants
// @route   GET /api/etudiants
exports.getEtudiants = async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.status(200).json({ success: true, count: etudiants.length, data: etudiants });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erreur Serveur' });
  }
};

// @desc    Afficher un seul étudiant
// @route   GET /api/etudiants/:id
exports.getEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.findById(req.params.id);

    if (!etudiant) {
      return res.status(404).json({ success: false, error: 'Étudiant non trouvé' });
    }

    res.status(200).json({ success: true, data: etudiant });
  } catch (error) {
    res.status(400).json({ success: false, error: 'ID invalide' });
  }
};

// @desc    Ajouter un étudiant
// @route   POST /api/etudiants
exports.createEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.create(req.body);
    res.status(201).json({ success: true, data: etudiant });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'Email déjà utilisé' });
    }
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Modifier un étudiant
// @route   PUT /api/etudiants/:id
exports.updateEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!etudiant) {
      return res.status(404).json({ success: false, error: 'Étudiant non trouvé' });
    }

    res.status(200).json({ success: true, data: etudiant });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Supprimer un étudiant
// @route   DELETE /api/etudiants/:id
exports.deleteEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.findByIdAndDelete(req.params.id);

    if (!etudiant) {
      return res.status(404).json({ success: false, error: 'Étudiant non trouvé' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: 'ID invalide' });
  }
};
