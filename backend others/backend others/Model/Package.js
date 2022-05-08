const mongoose = require("mongoose");
const packageSchema = new mongoose.Schema(
  {
    packageId: { type: String, required: true, unique: true },
    name: { type: String},
    startingDate: { type: String},
    endingDate: { type: String},
    price: { type: String},
    packageInclude: { type: String}
  },
  );
module.exports = mongoose.model("Package", packageSchema);

