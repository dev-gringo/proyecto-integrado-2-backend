const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

router.post('/', productoraController.crearProductora);
router.get('/', productoraController.obtenerProductoras);

module.exports = router;