const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: false}));

const productRouter = require("./productManger/productManager.routes");
app.use("/products", productRouter);
app.get("/welcome", (req,res) => {
    res.send("Food API successfully working");
});

module.exports = app;