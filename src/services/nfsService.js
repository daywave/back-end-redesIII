// nfsService.js
const fs = require('fs').promises;

async function readNFSFile(server, file) {
    try {
        const filePath = `${server}/${file}`;
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Error al leer el archivo ${file} en ${server}`);
    }
}

module.exports = {
    readNFSFile,
    // Otros métodos del servicio si es necesario...
};
