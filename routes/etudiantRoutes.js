const express = require('express');
const router = express.Router();
const {
  getEtudiants,
  getEtudiant,
  createEtudiant,
  updateEtudiant,
  deleteEtudiant
} = require('../controllers/etudiantController');

router
  .route('/')
  .get(getEtudiants)
  .post(createEtudiant);

router
  .route('/:id')
  .get(getEtudiant)
  .put(updateEtudiant)
  .delete(deleteEtudiant);

module.exports = router;
