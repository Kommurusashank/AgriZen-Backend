const Crop = require("../models/Crop");

// ==========================
// Add Crop
// ==========================
const addCrop = async (req, res) => {
  try {
    const crop = await Crop.create({
      ...req.body,
      farmer: req.user.id,
    });

    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Crops
// ==========================
const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find({
      farmer: req.user.id,
    });

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get Single Crop
// ==========================
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Crop
// ==========================
const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    crop.cropName = req.body.cropName || crop.cropName;
    crop.soilType = req.body.soilType || crop.soilType;
    crop.season = req.body.season || crop.season;
    crop.area = req.body.area || crop.area;
    crop.expectedYield =
      req.body.expectedYield || crop.expectedYield;
    crop.status = req.body.status || crop.status;

    const updatedCrop = await crop.save();

    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Crop
// ==========================
const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    await crop.deleteOne();

    res.status(200).json({
      message: "Crop deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
};