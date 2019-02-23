const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WSJF = new Schema({
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
    type: String,
    required: false
  },
});

module.exports = mongoose.model("WSJF", WSJF);
