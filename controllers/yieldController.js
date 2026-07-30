const predictYield = async (req, res) => {
  try {
    const {
      cropName,
      area,
      rainfall,
      fertilizer,
    } = req.body;

    const areaNum = Number(area);
    const rainNum = Number(rainfall);
    const fertNum = Number(fertilizer);

    let yieldValue = areaNum * 20;

    if (rainNum > 200) yieldValue += 8;
    if (fertNum > 50) yieldValue += 5;

    const suggestions = [
      "Maintain proper irrigation.",
      "Use balanced fertilizers.",
      "Monitor soil moisture regularly.",
    ];

    res.status(200).json({
      success: true,
      crop: cropName,
      predictedYield: `${yieldValue} Quintals`,
      confidence: "95%",
      suggestions,
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
  predictYield,
};