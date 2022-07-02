const express = require("express");
const { createProduct } = require("../controllers/place");
const router = express.Router();

router.post("product/create", createProduct)

module.exports = router;