// Import the DAO
const productDAO = require('./productManager.dao');

// Define the product logic

function addProduct(productFromClient) {
    return productDAO.addProductToDB(productFromClient);
}

function getAllProducts() {
    return productDAO.getAllProductsFromDB();
}

function getProductsByCategory(category) {
    return productDAO.getProductsByCategoryFromDB(category);
}

function updateProduct(productId, data) {
    return productDAO.updateProductInDB(productId, data);
}

function deleteProduct(productId) {
    return productDAO.deleteProductFromDB(productId);
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductsByCategory,
    updateProduct,
    deleteProduct
};