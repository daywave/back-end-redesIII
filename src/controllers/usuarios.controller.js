// usuariosController.js
const nfsService = require('../services/nfsService');

async function getUsuarios(req, res) {
    try {
        const data = await nfsService.readNFSFile('/home/minato/public/shared-kakashi-cliente', 'usuarios.json');
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function buscarPorIntereses(req, res) {
    try {
        const cadenaIntereses = req.body.intereses;

        if (!cadenaIntereses) {
            return res.status(400).send('La cadena de intereses es requerida.');
        }

        const data = await nfsService.readNFSFile('/home/minato/public/shared-kakashi-cliente', 'usuarios.json');
        const usuarios = JSON.parse(data);

        const usuariosCoincidentes = usuarios.usuarios.filter(usuario => {
            const interesesCoincidentes = usuario.intereses.filter(interes =>
                cadenaIntereses.includes(interes)
            );
            return interesesCoincidentes.length > 0;
        });

        res.json(usuariosCoincidentes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar usuarios por intereses');
    }
}

async function mostrarPorGenero(req, res) {
    try {
        const generoBuscado = req.body.genero;

        if (!generoBuscado) {
            return res.status(400).send('El campo "genero" es requerido.');
        }

        const data = await nfsService.readNFSFile('/home/minato/public/shared-kakashi-cliente', 'usuarios.json');
        const usuarios = JSON.parse(data);

        const usuariosPorGenero = usuarios.usuarios.filter(usuario =>
            usuario.genero.toLowerCase() === generoBuscado.toLowerCase()
        );

        res.json(usuariosPorGenero);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar usuarios por genero');
    }
}

async function crearNuevoUsuario(req, res) {
    try {
        const nuevoUsuario = req.body;

        if (!nuevoUsuario) {
            return res.status(400).send('La información del nuevo usuario es requerida.');
        }

        // Llamamos a la función para crear el usuario
        const usuarioCreado = await crearUsuario(nuevoUsuario);

        res.json(usuarioCreado);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear un nuevo usuario');
    }
}

module.exports = {
    getUsuarios,
    buscarPorIntereses,
    mostrarPorGenero,
    crearNuevoUsuario
    // Otros métodos del controlador si es necesario...
};
