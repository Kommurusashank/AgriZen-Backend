const detectDisease = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image.",
      });
    }

    // Demo prediction (replace with AI later)
    const diseases = [
      {
        disease: "Leaf Blight",
        confidence: "96%",
        symptoms: [
          "Brown spots on leaves",
          "Yellow edges",
          "Dry leaf tips",
        ],
        treatment: [
          "Spray Copper Oxychloride",
          "Remove infected leaves",
        ],
        prevention: [
          "Avoid overwatering",
          "Maintain field hygiene",
        ],
      },
      {
        disease: "Healthy Plant",
        confidence: "99%",
        symptoms: ["No disease detected"],
        treatment: ["No treatment required"],
        prevention: ["Continue regular care"],
      },
    ];

    const result = diseases[Math.floor(Math.random() * diseases.length)];

    res.status(200).json({
      success: true,
      result,
      image: req.file.filename,
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
  detectDisease,
};