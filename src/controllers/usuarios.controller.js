// usuariosController.js
const nfsService = require('../services/nfsService');

async function getUsuarios(req, res) {
    try {
        const data = await nfsService.readNFSFile('/home/minato/public/shared-kakashi-cliente', 'usuarios');
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getUsuarios,
    // Otros métodos del controlador si es necesario...
};
