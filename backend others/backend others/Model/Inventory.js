const mongoose = require("mongoose");
const inventorySchema = new mongoose.Schema(
  {
    inventoryId: { type: String, required: true, unique: true },
    name: { type: String},
    quantity: { type: String},
    price: { type: String},
    type: { type: String},
    description: { type: String}
  },
  );
module.exports = mongoose.model("inventory", inventorySchema);


