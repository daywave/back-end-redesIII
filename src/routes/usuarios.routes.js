const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usuariosController = require('../controllers/usuariosController');

router.use(bodyParser.json());

router.get('/usuarios', usuariosController.getUsuarios);
router.post('/intereses', usuariosController.buscarPorIntereses);

module.exports = router;
