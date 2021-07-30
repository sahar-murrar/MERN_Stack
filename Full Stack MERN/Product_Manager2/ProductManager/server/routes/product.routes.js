const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/products', productController.getAllProducts);
    app.post('/api/createProduct', productController.createProduct);
    app.get('/api/product/:id', productController.getProduct);
}