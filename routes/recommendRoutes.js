const express = require("express");
const router = express.Router();

const {
  recommendCrop,
} = require("../controllers/recommendController");

router.post("/", recommendCrop);

module.exports = router;