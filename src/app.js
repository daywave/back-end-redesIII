const express = require('express');
const app = express();
const port = 3000;
const mensajesRoutes = require('./routes/mensajes.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

app.use(mensajesRoutes);
app.use(usuariosRoutes);

app.listen(port, '10.10.10.70', () => {
    console.log(`Servidor NodeJs funciona en http://10.10.10.70:${port}`);
});
