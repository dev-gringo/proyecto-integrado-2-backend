const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.post('/', mediaController.crearMedia);
router.get('/', mediaController.obtenerMedia);
// Rutas para actualizar y eliminar (requieren el ID en la URL)
router.put('/:id', mediaController.actualizarMedia);
router.delete('/:id', mediaController.eliminarMedia);

module.exports = router;