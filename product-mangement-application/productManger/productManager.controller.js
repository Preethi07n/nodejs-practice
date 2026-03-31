const axios = require("axios");

const url = "http://localhost:3000/products";

const allowedCategories = ["dairy", "frozen item", "fresh juice"];
const addProducts = async (productDetails) => {
    try{
       const { name, price, category} = productDetails;
       if(!name || !price || !category) {
         return "All fields are required"
       }
       if(!allowedCategories.includes(category.toLowerCase())){
        return "Invalid category, Allowed dairy, frozen items, fresh juice"
       }
    const mfDate = new Date();
    const expiryDate = new Date(mfDate);
    expiryDate.setDate(mfDate.getDate() + 10);
    productDetails.manufacturingDate = mfDate;
    productDetails.expiryDate = expiryDate;
    console.log('prodcutDetails');
    const res = await axios.post(url, productDetails);
    return res.data;
    } catch (err) {
        console.log(err);
        return "Error";
    } 
};

//Get All Products

const getAllProducts = async () => {
  try{
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return "Error"
  }
};

const getByCategory = async (category) => {
    try{
        const response = await axios.get(`${url}?category=${category}`);
        return response.data;
    } catch (err) {
        return "Error";
    }
}

const updateProduct = async(id, data) => {
    try {
        await axios.put(`${url}/${id}`, data);
        return "Product Updated Successfully"
    } catch(err){
        return "Error"
}
};

const deleteProduct = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
        return "Products Deleted Successfully";
    } catch (err) {
        return "Error";
    }
}

module.exports = {
    addProducts,
    getAllProducts,
    getByCategory,
    updateProduct,
    deleteProduct
};