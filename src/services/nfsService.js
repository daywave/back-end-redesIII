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

async function buscarPorIntereses(cadenaIntereses) {
    // Supongamos que tienes un modelo de usuarios donde cada usuario tiene un campo 'intereses'
    // Aquí deberías realizar la lógica específica para tu aplicación

    const usuarios = await usuariosModel.find({ intereses: { $in: cadenaIntereses } }).exec();

    return usuarios;
}
module.exports = {
    readNFSFile,
    // Otros métodos del servicio si es necesario...
};
