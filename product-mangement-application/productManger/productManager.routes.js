const express = require("express");
const router = express.Router();

const productController = require("./productManager.controller");

//Add products

router.post("/add", async (req,res) => {
    const result = await productController.addProducts(req.body);
    console.log('in post');
    result === "Error" ? res.status(500).send("Something went wrong"): res.send(result);
})

//Get All Products

router.get("/list", async (req,res) => {
    const result = await productController.getAllProducts();
    result === "Error" ? res.status(500).send("Something went wrong"): res.send(result);
});

//Get By Category

router.get("/category/:category", async (req,res) => {
    const result = await productController.getByCategory(req.params.category);
    result === "Error" ? res.status(500).send("Something went wrong"): res.send(result);
});

//Update

router.put("/update/:id", async (req,res) => {
    const result = await productController.updateProduct(req.params.id, req.body);
    result === "Error" ? res.status(500).send("Something went wrong"): res.send(result)
});

//Delete

router.delete("/delete/:id", async (req,res) => {
    const result = await productController.deleteProduct(req.params.id);
    result === "Error" ? res.status(500).send("Something went wrong"): res.send(result)
});

module.exports = router;