var express = require('express');
var router = express.Router();
var distribucionesController = require('../controllers/distribuciones.controller')

/* GET users listing. */
router.post('/uniforme', distribucionesController.uniforme);
router.post('/binomial', distribucionesController.binomial);
router.post('/poisson', distribucionesController.poisson);
router.post('/hipergeometrica', distribucionesController.hipergeometrica);

module.exports = router;
