const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    eventId: { type: String, required: true, unique: true },
    name: { type: String},
    eventDate: { type: String},
    eventType: { type: String},
    description: { type: String},
  },
  );
module.exports = mongoose.model("event", eventSchema);

