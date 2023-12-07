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

async function mostrarPorSexo(req, res) {
    try {
        const sexoBuscado = req.body.sexo;

        if (!sexoBuscado) {
            return res.status(400).send('El sexo es requerido.');
        }

        const data = await nfsService.readNFSFile('/home/minato/public/shared-kakashi-cliente', 'usuarios.json');
        const usuarios = JSON.parse(data);

        const usuariosPorSexo = usuarios.usuarios.filter(usuario =>
            usuario.genero.toLowerCase() === sexoBuscado.toLowerCase()
        );

        res.json(usuariosPorSexo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar usuarios por sexo');
    }
}

module.exports = {
    getUsuarios,
    buscarPorIntereses,
    mostrarPorSexo
    // Otros métodos del controlador si es necesario...
};
