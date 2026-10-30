# Proyecto Integrado II - Backend de Gestión de Películas y Series

Este repositorio contiene el código fuente del backend para un sistema de gestión de producciones audiovisuales (películas y series). El proyecto fue desarrollado aplicando la arquitectura Modelo-Vista-Controlador (MVC) y expone una API RESTful para realizar operaciones CRUD completas sobre diferentes entidades interrelacionadas.

## Autores
* Johan Stiven Orrego Arias
* Jorge Jaramillo

## Tecnologías Utilizadas
* **Node.js:** Entorno de ejecución para JavaScript en el servidor.
* **Express.js:** Framework para la creación de rutas y manejo de peticiones HTTP.
* **MongoDB:** Base de datos NoSQL orientada a documentos.
* **Mongoose:** ODM utilizado para el modelado de esquemas, validación estricta de campos y manejo de relaciones.

## Módulos y Endpoints
El sistema expone endpoints para los siguientes cinco módulos:
1. **Género:** Gestión de categorías (ej. Acción, Ciencia Ficción).
2. **Director:** Registro de directores encargados de las obras.
3. **Productora:** Entidades empresariales de producción.
4. **Tipo:** Clasificación del formato (Película o Serie).
5. **Media:** Módulo principal que unifica la información mediante referencias (`ObjectIds`) a las colecciones anteriores.

## Instalación y Despliegue Local

1. Clonar este repositorio:
   ```bash
   git clone
  

  Acceder al directorio e instalar dependencias:
 
      npm install


Asegurarse de tener una conexión activa a MongoDB local o MongoDB Atlas configurada en el proyecto.

Iniciar el servidor local:
node index.js

**El servidor se inicializará por defecto en el puerto 4000 (http://localhost:4000/api/...).**

## Pruebas e Importación (Postman)
En la raíz del repositorio se encuentra el archivo proyecto peliculas.postman_collection.json.
Para evaluar la API:

1. Abre Postman y selecciona Import.

2. Carga el archivo .json proporcionado.

3. Ejecuta las peticiones preconfiguradas (GET, POST, PUT, DELETE) para validar la creación de registros, las reglas de obligatoriedad (ej. urlPelicula) y las respuestas del servidor.
