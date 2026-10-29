const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

router.post('/', tipoController.crearTipo);
router.get('/', tipoController.obtenerTipos);

module.exports = router;