const express = require('express');
const usuariosController = require('../controllers/usuarios.controller');


const router = express.Router();


router.get('/usuarios', usuariosController.getUsuarios);



module.exports = router;