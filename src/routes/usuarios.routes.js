const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usuariosController = require('../controllers/usuarios.controller');

router.use(bodyParser.json());

router.get('/usuarios', usuariosController.getUsuarios);
router.post('/intereses', usuariosController.buscarPorIntereses);
router.post('/genero', usuariosController.mostrarPorGenero); 
router.post('/crear', usuariosController.crearNuevoUsuario); 


module.exports = router;
