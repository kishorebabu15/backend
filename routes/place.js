const express = require("express");
const { addRecord } = require("../controllers/place");
const router = express.Router();

router.post("/place/addRecord", addRecord)

module.exports = router;