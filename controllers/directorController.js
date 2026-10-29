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

exports.actualizarDirector = async (req, res) => {
    try {
        const directorActualizado = await Director.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        if (!directorActualizado) return res.status(404).json({ mensaje: 'Director no encontrado' });
        res.status(200).json(directorActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
    }
};

exports.eliminarDirector = async (req, res) => {
    try {
        const directorEliminado = await Director.findByIdAndDelete(req.params.id);
        if (!directorEliminado) return res.status(404).json({ mensaje: 'Director no encontrado' });
        res.status(200).json({ mensaje: 'Director eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
};