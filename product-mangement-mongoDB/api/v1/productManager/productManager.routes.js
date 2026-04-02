// Create a Product Router to handle the request and response
const router = require('express').Router();

const productController = require('./productManager.controller');

// Define the POST route - Add Product
router.post("/", (req, res) => {
    try {
        // Check if body contains object data
        if (Object.keys(req.body).length === 0) {
            res.status(403).send({ message: "Invalid input" });
        }
        else {
            // Call the controller and send the req.body
            productController.addProduct(req.body)
                .then((response) => {
                    res.send(response);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send({ message: "Failed to add product" });
                });
        }
    }
    catch (err) {
        console.log(err);
        res.send({ message: "Failed to complete request" });
    }
});

// Define the GET route - Get All Products
router.get('/', (req, res) => {
    try {
        productController.getAllProducts()
            .then((response) => {
                res.send(response);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({ message: "Failed to fetch products" });
            });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "Failed to complete request" });
    }
});

// Get products by category
router.get('/category/:category', (req, res) => {
    try {
        productController.getProductsByCategory(req.params.category)
            .then((response) => {
                res.send(response);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({ message: "Failed to fetch products by category" });
            });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "Failed to complete request" });
    }
});

// Update product
router.put('/:productId', (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            res.status(403).send({ message: "Invalid input" });
        }
        else {
            productController.updateProduct(req.params.productId, req.body)
                .then((response) => {
                    res.send(response);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send({ message: "Failed to update product" });
                });
        }
    }
    catch (err) {
        console.log(err);
        res.send({ message: "Failed to complete request" });
    }
});

// Delete product
router.delete('/:productId', (req, res) => {
    try {
        productController.deleteProduct(req.params.productId)
            .then((response) => {
                res.send(response);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({ message: "Failed to delete product" });
            });
    }
    catch (err) {
        console.log(err);
        res.send({ message: "Failed to complete request" });
    }
});

module.exports = router;