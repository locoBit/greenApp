var express             = require('express');
var router              = express.Router();
let productoresController = require('../controllers/productoresController');
let comprasController = require('../controllers/comprasController');

router.post('/api/productores/', productoresController.save);
router.get('/api/productores/folio/:folio', productoresController.getProductorByFolio);

router.post('/api/compras/', comprasController.save);

module.exports = router;
