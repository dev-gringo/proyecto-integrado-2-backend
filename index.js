const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //importo el mongoose
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON desde Postman
app.use('/api/generos', require('./routes/genero')); //esta línea es para conectar las rutas de genero
app.use('/api/media', require('./routes/media'));
app.use('/api/directores', require('./routes/director'));
app.use('/api/productoras', require('./routes/productora'));
app.use('/api/tipos', require('./routes/tipo'));

// Conexión a MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((error) => console.log('Error al conectar a MongoDB:', error));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Películas funcionando correctamente');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});