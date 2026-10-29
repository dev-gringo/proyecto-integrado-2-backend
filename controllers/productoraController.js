const Productora = require('../models/Productora');

exports.crearProductora = async (req, res) => {
    try {
        const nuevaProductora = new Productora(req.body);
        await nuevaProductora.save();
        res.status(201).json(nuevaProductora);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.status(200).json(productoras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};