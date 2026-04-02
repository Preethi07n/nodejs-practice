// Handle the product database logic - Define DAO layer

// Access Product Model
const productModel = require('./productManager.entity');
const uuid = require('uuid');
const logger = require('../../../logger');

// Add product to database
async function addProductToDB(productDetails) {
    console.log("product", productDetails);
    
    const { name, price, category } = productDetails;
    
    // Validation
    if (!name || !price || !category) {
        throw new Error("All fields are required");
    }
    
    const allowedCategories = ["dairy", "frozen item", "fresh juice"];
    if (!allowedCategories.includes(category.toLowerCase())) {
        throw new Error("Invalid category. Allowed: dairy, frozen item, fresh juice");
    }
    
    // Calculate expiry date (10 days from manufacturing)
    const manufacturingDate = new Date();
    const expiryDate = new Date(manufacturingDate);
    expiryDate.setDate(manufacturingDate.getDate() + 10);
    
    let newProduct = new productModel({
        productId: uuid.v4(),
        name: name,
        price: price,
        category: category.toLowerCase(),
        manufacturingDate: manufacturingDate,
        expiryDate: expiryDate
    });

    try {
        const response = await newProduct.save();
        logger.info(response);
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

// Get all products from database
async function getAllProductsFromDB() {
    try {
        const response = await productModel.find();
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

// Get products by category
async function getProductsByCategoryFromDB(category) {
    try {
        if (!category) {
            throw new Error("Category is required");
        }
        
        const response = await productModel.find({ category: category.toLowerCase() });
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

// Update product in database
async function updateProductInDB(productId, updateData) {
    try {
        if (!productId) {
            throw new Error("Product ID is required");
        }
        
        const response = await productModel.findOneAndUpdate(
            { productId: productId },
            updateData,
            { new: true }
        );
        
        if (!response) {
            throw new Error("Product not found");
        }
        
        logger.info(response);
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

// Delete product from database
async function deleteProductFromDB(productId) {
    try {
        if (!productId) {
            throw new Error("Product ID is required");
        }
        
        const response = await productModel.findOneAndDelete({ productId: productId });
        
        if (!response) {
            throw new Error("Product not found");
        }
        
        logger.info(response);
        return response;
    } catch (err) {
        logger.error(err);
        throw err;
    }
}

module.exports = {
    addProductToDB,
    getAllProductsFromDB,
    getProductsByCategoryFromDB,
    updateProductInDB,
    deleteProductFromDB
};
