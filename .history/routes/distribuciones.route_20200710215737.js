var express = require('express');
var router = express.Router();
var distribucionesController = require('../controllers/distribuciones.controller')

/* GET users listing. */
router.post('/uniforme', distribucionesController.uniforme);
router.post('/binomial', distribucionesController.binomial);
router.post('/binomial2', distribucionesController.binomial2);

module.exports = router;
