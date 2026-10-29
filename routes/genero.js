const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

// Definir los endpoints
router.post('/', generoController.crearGenero);
router.get('/', generoController.obtenerGeneros);

module.exports = router;