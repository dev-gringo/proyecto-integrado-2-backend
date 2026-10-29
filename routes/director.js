const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

router.post('/', directorController.crearDirector);
router.get('/', directorController.obtenerDirectores);
router.put('/:id', directorController.actualizarDirector);
router.delete('/:id', directorController.eliminarDirector);

module.exports = router;