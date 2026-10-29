const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

router.post('/', tipoController.crearTipo);
router.get('/', tipoController.obtenerTipos);
router.put('/:id', tipoController.actualizarTipo);
router.delete('/:id', tipoController.eliminarTipo);

module.exports = router;