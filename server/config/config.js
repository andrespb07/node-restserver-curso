// CONFIGURACIONES GLOBALES

// Puerto
// Indicamos el puerto que va a ejecutarse la página si es desarrollo o producción y en caso de fallar
// por defecto retorne al puerto 3000, esto sirve para heroku
process.env.PORT = process.env.PORT || 3000;