var express = require('express');
var router = express.Router();
var distribucionesController = require('../controllers/distribuciones.controller')

/* GET users listing. */
router.post('/uniforme', distribucionesController.uniforme);
router.get('/binomial', distribucionesController.binomial);
router.get('/poisson', distribucionesController.poisson);
router.get('/hipergeometrica', distribucionesController.hipergeometrica);

module.exports = router;
