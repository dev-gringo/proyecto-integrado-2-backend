const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

router.post('/', productoraController.crearProductora);
router.get('/', productoraController.obtenerProductoras);
router.put('/:id', productoraController.actualizarProductora);
router.delete('/:id', productoraController.eliminarProductora);

module.exports = router;