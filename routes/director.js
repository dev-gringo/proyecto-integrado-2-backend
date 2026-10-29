const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

router.post('/', directorController.crearDirector);
router.get('/', directorController.obtenerDirectores);

module.exports = router;