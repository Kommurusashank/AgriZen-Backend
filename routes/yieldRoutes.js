const express = require("express");
const router = express.Router();

const {
  predictYield,
} = require("../controllers/yieldController");

router.post("/", predictYield);

module.exports = router;