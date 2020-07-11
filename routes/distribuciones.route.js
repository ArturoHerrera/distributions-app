var express = require('express');
var router = express.Router();
var distribucionesController = require('../controllers/distribuciones.controller')

/* GET users listing. */
router.post('/uniforme', distribucionesController.uniforme);
router.get('/binomial2', distribucionesController.binomial2);
router.get('/poisson', distribucionesController.poisson);

module.exports = router;
