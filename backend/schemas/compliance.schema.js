const mongoose = require("mongoose");
const Schema = mongoose.Schema

const complianceSchema = new Schema({
  title: {
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
  }
}, {timestamps: true});

const Compliances = mongoose.model("Compliances", complianceSchema);
module.exports = Compliances;