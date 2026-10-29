const Genero = require('../models/Genero');

// Función para crear un género (POST)
exports.crearGenero = async (req, res) => {
    try {
        const nuevoGenero = new Genero(req.body);
        await nuevoGenero.save();
        res.status(201).json(nuevoGenero);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el género', error: error.message });
    }
};

// Función para listar todos los géneros (GET)
exports.obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.status(200).json(generos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los géneros', error: error.message });
    }
};

// Función para actualizar un género (PUT)
exports.actualizarGenero = async (req, res) => {
    try {
        // req.params.id captura el ID de la URL. { new: true } devuelve el objeto actualizado.
const generoActualizado = await Genero.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });        if (!generoActualizado) {
            return res.status(404).json({ mensaje: 'Género no encontrado' });
        }
        res.status(200).json(generoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el género', error: error.message });
    }
};

// Función para eliminar un género (DELETE)
exports.eliminarGenero = async (req, res) => {
    try {
        const generoEliminado = await Genero.findByIdAndDelete(req.params.id);
        
        if (!generoEliminado) {
            return res.status(404).json({ mensaje: 'Género no encontrado' });
        }
        res.status(200).json({ mensaje: 'Género eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el género', error: error.message });
    }
};