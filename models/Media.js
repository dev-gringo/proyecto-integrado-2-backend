const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    serial: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    sinopsis: { type: String, required: true },
    urlPelicula: { type: String, required: true, unique: true },
    imagenPortada: { type: String, required: true },
    añoEstreno: { type: Number, required: true },
    generoPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
    directorPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
    productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true }
}, {
    timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
});

module.exports = mongoose.model('Media', mediaSchema);