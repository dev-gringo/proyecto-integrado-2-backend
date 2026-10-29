const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');

// Crear película/serie (POST)
exports.crearMedia = async (req, res) => {
    try {
        const { generoPrincipal, directorPrincipal, productora, tipo, serial, urlPelicula } = req.body;

        // 1. Validar Género Activo
        const generoExiste = await Genero.findById(generoPrincipal);
        if (!generoExiste || generoExiste.estado !== 'Activo') {
            return res.status(400).json({ mensaje: 'El género no existe o está inactivo' });
        }

        // 2. Validar Director Activo
        const directorExiste = await Director.findById(directorPrincipal);
        if (!directorExiste || directorExiste.estado !== 'Activo') {
            return res.status(400).json({ mensaje: 'El director no existe o está inactivo' });
        }

        // 3. Validar Productora Activa
        const productoraExiste = await Productora.findById(productora);
        if (!productoraExiste || productoraExiste.estado !== 'Activo') {
            return res.status(400).json({ mensaje: 'La productora no existe o está inactiva' });
        }

        // 4. Validar Tipo (Solo existencia, no tiene estado)
        const tipoExiste = await Tipo.findById(tipo);
        if (!tipoExiste) {
            return res.status(400).json({ mensaje: 'El tipo multimedia no existe' });
        }

        const nuevaMedia = new Media(req.body);
        await nuevaMedia.save();
        res.status(201).json(nuevaMedia);

    } catch (error) {
        // Manejar errores de unicidad (serial o url repetida)
        if (error.code === 11000) {
            return res.status(400).json({ mensaje: 'El serial o la URL ya existen en otra película' });
        }
        res.status(500).json({ mensaje: 'Error al crear la media', error: error.message });
    }
};

// Listar películas/series (GET)
exports.obtenerMedia = async (req, res) => {
    try {
        // Populate trae los datos completos de las relaciones, no solo el ID
        const medias = await Media.find()
            .populate('generoPrincipal', 'nombre estado')
            .populate('directorPrincipal', 'nombres estado')
            .populate('productora', 'nombre estado')
            .populate('tipo', 'nombre');
        res.status(200).json(medias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la media', error: error.message });
    }
};

// Función para actualizar una película/serie (PUT)
exports.actualizarMedia = async (req, res) => {
    try {
        const mediaActualizada = await Media.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { returnDocument: 'after' }
        );
        
        if (!mediaActualizada) {
            return res.status(404).json({ mensaje: 'Producción no encontrada' });
        }
        res.status(200).json(mediaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
    }
};

// Función para eliminar una película/serie (DELETE)
exports.eliminarMedia = async (req, res) => {
    try {
        const mediaEliminada = await Media.findByIdAndDelete(req.params.id);
        
        if (!mediaEliminada) {
            return res.status(404).json({ mensaje: 'Producción no encontrada' });
        }
        res.status(200).json({ mensaje: 'Producción eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
};