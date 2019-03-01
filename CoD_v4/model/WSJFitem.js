const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define a set function that is executed to get
// the total result of the calc before it is send to the db
//https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

const WSJF = new Schema({
  createdOn: {
    type: Date,
    default: Date.now
  },
  itemName: {
      type: String,
      required: false
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
    required: false
  },
    WSJFValue: {
      type: String,
        set: function() {
          let WSJFValue = this.redcostotal / this.estimationValue;
          let redcostotal = this.redcostotal;
          let estimationValue = this.estimationValue;
          console.log(redcostotal);
          console.log(estimationValue);
          console.log(WSJFValue);
            return WSJFValue
        },
    required: false
    }
});


module.exports = mongoose.model("WSJF", WSJF);
