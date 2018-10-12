const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WSJFSchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("WSJF", WSJFSchema);
