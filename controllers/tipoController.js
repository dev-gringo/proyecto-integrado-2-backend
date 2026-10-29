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

exports.actualizarTipo = async (req, res) => {
    try {
        const tipoActualizado = await Tipo.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        if (!tipoActualizado) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
        res.status(200).json(tipoActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
    }
};

exports.eliminarTipo = async (req, res) => {
    try {
        const tipoEliminado = await Tipo.findByIdAndDelete(req.params.id);
        if (!tipoEliminado) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
        res.status(200).json({ mensaje: 'Tipo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
};