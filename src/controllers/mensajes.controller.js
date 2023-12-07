const nfsService = require('../services/nfsService');

export async function getMensajes(req, res) {
    try {
        const data = await nfsService.readNFSFile('/home/minato/public/shared-minato', 'mensajes');
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getMensajes,
    // Otros métodos del controlador si es necesario...
};