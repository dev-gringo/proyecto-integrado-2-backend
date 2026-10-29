const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    estado: { 
        type: String, 
        required: true, 
        enum: ['Activo', 'Inactivo'], 
        default: 'Activo' 
    },
    descripcion: { 
        type: String, 
        required: true 
    }
}, {
    // Mongoose maneja automáticamente estas fechas cada vez que guardas o actualizas un registro
    timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
});

module.exports = mongoose.model('Genero', generoSchema);