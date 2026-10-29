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