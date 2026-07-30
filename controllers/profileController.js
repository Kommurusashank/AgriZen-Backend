const Profile = require("../models/Profile");

// Get Profile
const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.json({
        fullName: "",
        phone: "",
        address: "",
        farmName: "",
        farmSize: "",
      });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create or Update Profile
const saveProfile = async (req, res) => {
  try {
    const data = {
      ...req.body,
      user: req.user.id,
    };

    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      data,
      {
        new: true,
        upsert: true,
      }
    );

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProfile,
  saveProfile,
};