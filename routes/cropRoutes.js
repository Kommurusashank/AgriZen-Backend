const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropController");

// Add Crop
router.post("/", protect, addCrop);

// Get All Crops
router.get("/", protect, getCrops);

// Get Single Crop
router.get("/:id", protect, getCropById);

// Update Crop
router.put("/:id", protect, updateCrop);

// Delete Crop
router.delete("/:id", protect, deleteCrop);

module.exports = router;