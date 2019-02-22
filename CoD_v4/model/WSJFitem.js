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
    required: true
  },
  redcostotalhrs: {
    type: Number,
    required: true
  },
  redcosfutureppl: {
    type: Number,
    required: true
  },
  redcosfuturehrs: {
    type: Number,
    required: true
  },
  redcostotal: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("WSJF", WSJFSchema);
