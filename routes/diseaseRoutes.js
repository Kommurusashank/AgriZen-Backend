const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  detectDisease,
} = require("../controllers/diseaseController");

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Route
router.post("/", upload.single("image"), detectDisease);

module.exports = router;