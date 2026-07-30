const recommendCrop = async (req, res) => {
  try {
    const { soilType, season, rainfall } = req.body;

    let crop = "";

    if (soilType === "Black Soil" && season === "Kharif") {
      crop = "Cotton";
    } else if (soilType === "Black Soil" && season === "Rabi") {
      crop = "Wheat";
    } else if (soilType === "Red Soil" && season === "Kharif") {
      crop = "Groundnut";
    } else if (soilType === "Red Soil" && season === "Rabi") {
      crop = "Pulses";
    } else if (soilType === "Clay Soil") {
      crop = Number(rainfall) > 200 ? "Rice" : "Sugarcane";
    } else if (soilType === "Sandy Soil") {
      crop = "Millets";
    } else {
      crop = "Maize";
    }

    res.json({
      success: true,
      crop,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  recommendCrop,
};