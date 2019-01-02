var express             = require('express');
var router              = express.Router();
let productoresController = require('../controllers/productoresController');

// POST de productores
router.post('/api/productores/', productoresController.save);
router.get('/api/productores/folio/:folio', productoresController.getProductorByFolio);

module.exports = router;
