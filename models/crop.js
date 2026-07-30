const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
    },

    soilType: {
      type: String,
      required: true,
    },

    season: {
      type: String,
      required: true,
    },

    area: {
      type: Number,
      required: true,
    },

    expectedYield: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Growing", "Healthy", "Harvested"],
      default: "Growing",
    },

    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Crop", cropSchema);