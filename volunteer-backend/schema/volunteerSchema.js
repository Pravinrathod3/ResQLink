const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  skills: { type: [String], required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }
});

const Volunteer = mongoose.model("volunteer_db", VolunteerSchema); // 'volunteer_db' is your collection name
module.exports = Volunteer;
