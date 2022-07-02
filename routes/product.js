const express = require("express");
const { createProduct, getProducts } = require("../controllers/place");
const router = express.Router();

router.post("/product/create", createProduct)
router.get("/product/getProd", getProducts)


module.exports = router;