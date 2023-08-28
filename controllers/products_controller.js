const Product = require('../models/product');

//function to show all the products
module.exports.products = async function (req, res) {
    try {
        const foundProducts = await Product.find({});
        res.send(foundProducts);
    } catch (err) {
        console.log("Product give err");
        res.status(500).send(err.message);
    }
}

//function to create a new product
module.exports.create = async function (req, res) {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity
        });

        await newProduct.save();

        res.send('New product added successfully.');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
//function to delete a product using its id
module.exports.delete = async function (req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID });
        res.send({ message: "Product deleted" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
//function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
    try {
        const ID = req.params.productID;
    
        // Find the product using id
        const {name,quantity} =req.body;
        const updatedProduct = await Product.findByIdAndUpdate(ID,{
            name,
            quantity,
        },
         {new: true } 
         );

        await updatedProduct.save();

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
       
        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
}   