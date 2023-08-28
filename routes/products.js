const express = require('express');
const router = express.Router();

//Initilizing products controller
const productsController = require('../controllers/products_controller');

//go to all products
router.get('/products',productsController.products);

//to create a product
router.post('/create',productsController.create);

//to delete a product using its id
router.delete('/delete/:productID',productsController.delete);

//to update the quantity of product
router.put('/update_quantity/:productID',productsController.updateQuantity);

module.exports=router;