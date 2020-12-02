// importando la carpeta config el archivo config.js
require('./config/config');

// 1. Sera la configuración del servidor utilizando la librería express

// 1.1 Declaración de las variables express
const express = require('express');
const app = express();
// Declaración de las variables body-parser
const bodyParser = require('body-parser');

//1.2 Middlewares
// parseo aplicación del /x-www-form-urlencoded (Postman)
app.use(bodyParser.urlencoded({ extended: false }))
// parseo aplicación/json
app.use(bodyParser.json())

// 2. Respuesta del servidor

// 2.1 GET
app.get('/', function (req, res) {
  res.json('Get usuario');
});

// 2.2 Post
app.post('/usuario', function (req, res) {

  // Obtención de los parámetros desde el /x-www-form-urlencoded (Postman)
  let cuerpo = req.body;

  // Condicional en caso de que el usuario envíe una petición errornea
  // debe ir el mismo nombre de los parámetros registrados desde el postman
  if (cuerpo.nombre === undefined) {

    // respuesta servidor código http 400- bad request
    res.status(400).json({

      ok: false,
      mensaje: 'El nombre es necesario'

    });

  } else {

    res.json({
      persona: cuerpo
    });

  }


});

// 2.3 Put
// Para especificar un path es necesario agregar el parametro de la siguiente manera "/: cualquier nombre"
app.put('/usuario/:id', function (req, res) {

  // Obtención del parámetro id
  let identificacion = req.params.id;

  res.json({

    id: identificacion
    // Se visualiza en el postman el retorno de cualquier valor que le agreguemos sobre la 
    //url = .../usuario/#cualquiervalor

  });
});

// 2.4 Delete
app.delete('/', function (req, res) {
  res.json('Delete usuario');
});

// 3. Puerto donde se abrira la página web, process.env.PORT viene del archivo config.js
app.listen(process.env.PORT, () => {
  console.log('Escuchando el puerto: ' + process.env.PORT);
});