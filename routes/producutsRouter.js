const express = require('express');// requerimos expres
let router = express.Router();//requerims el metodo router de exres
let controller = require('../controllers/productsConteroller')// requerimos el archivo del controlador

router.get('/:id', controller.product)




module.exports = router;