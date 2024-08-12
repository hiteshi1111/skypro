const mongoose = require("mongoose");
const Schema = mongoose.Schema

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  pdfFile: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package