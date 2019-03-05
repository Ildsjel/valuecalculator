const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WSJF = new Schema({
  createdOn: {
    type: Date,
    default: Date.now
  },
  itemName: {
      type: String,
      required: true
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
      set: function() {
        //Cost of delay calculation: (people*hrs/cost now) - (people*hrs/cost in future) = Cost of delay for auomtating
            let currentstate = (this.redcostotalppl * 25) * this.redcostotalhrs;
         console.log(currentstate);
         let goalstate = (this.redcosfutureppl * 25) * this.redcosfuturehrs;
         console.log(goalstate);
         let redcostotal = currentstate - goalstate;
         console.log(redcostotal);

         return redcostotal;
      },
    required: true
  },
  estimationValue: {
    type: Number,
    required: true
  },
    WSJFValue: {
      type: String,
        set: function() {
          let WSJFValue = this.redcostotal / this.estimationValue;
          return WSJFValue
        },
    required: true
    }
});


module.exports = mongoose.model("WSJF", WSJF);
