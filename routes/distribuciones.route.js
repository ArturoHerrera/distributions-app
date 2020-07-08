var express = require('express');
var router = express.Router();
var distribucionesController = require('../controllers/distribuciones.controller')

/* GET users listing. */
router.post('/unirforme', distribucionesController.unirforme);

module.exports = router;
