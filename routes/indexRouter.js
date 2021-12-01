const express = require('express');// requerimos expres
let router = express.Router();//requerims el metodo router de exres
let controller = require('../controllers/indexConteroller')// requerimos el archivo del controlador

router.get('/', controller.index)
router.get('/contacto', controller.contacto)



module.exports = router;