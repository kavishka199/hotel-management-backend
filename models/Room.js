const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema(
  {
    roomName: { type: String, required: true, unique: true },
    roomType: { type: String},
    features: { type: String},
  },
  );
module.exports = mongoose.model("Room", roomSchema);