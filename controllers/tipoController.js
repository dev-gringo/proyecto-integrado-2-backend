const Tipo = require('../models/Tipo');

exports.crearTipo = async (req, res) => {
    try {
        const nuevoTipo = new Tipo(req.body);
        await nuevoTipo.save();
        res.status(201).json(nuevoTipo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.status(200).json(tipos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};