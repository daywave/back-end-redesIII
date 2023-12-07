const express = require('express');
const MensajesController = require('../controllers/mensajes.controller');

const router = express.Router();


router.get('/mensajes', MensajesController.getMensajes);



module.exports = router