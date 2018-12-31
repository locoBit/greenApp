var express             = require('express');
var router              = express.Router();
let indexController     = require('../controllers/indexController');

/* GET home page. */
router.get('/api', indexController.get);

// POST de productos
//router.post('/products', productsController.post);

module.exports = router;
