const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', productController.getAllProducts);
    app.post('/api/product', productController.createProduct);
}