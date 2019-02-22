const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WSJFSchema = new Schema({
  itemName: {
    type: String,
    required: false
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  redcostotalppl: {
    type: Number,
    required: false
  },
  redcostotalhrs: {
    type: Number,
    required: false
  },
  redcosfutureppl: {
    type: Number,
    required: false
  },
  redcosfuturehrs: {
    type: Number,
    required: false
  },
  redcostotal: {
    type: Number,
    required: false
  },
});

module.exports = mongoose.model("WSJF", WSJFSchema);
