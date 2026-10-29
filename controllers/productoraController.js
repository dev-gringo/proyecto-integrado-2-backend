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

exports.actualizarProductora = async (req, res) => {
    try {
        const productoraActualizada = await Productora.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        if (!productoraActualizada) return res.status(404).json({ mensaje: 'Productora no encontrada' });
        res.status(200).json(productoraActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
    }
};

exports.eliminarProductora = async (req, res) => {
    try {
        const productoraEliminada = await Productora.findByIdAndDelete(req.params.id);
        if (!productoraEliminada) return res.status(404).json({ mensaje: 'Productora no encontrada' });
        res.status(200).json({ mensaje: 'Productora eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
};