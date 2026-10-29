const Director = require('../models/Director');

exports.crearDirector = async (req, res) => {
    try {
        const nuevoDirector = new Director(req.body);
        await nuevoDirector.save();
        res.status(201).json(nuevoDirector);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear director', error: error.message });
    }
};

exports.obtenerDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.status(200).json(directores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};