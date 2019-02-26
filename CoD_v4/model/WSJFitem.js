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
      set: function() {
        //TODO this won't work that way. Can't be strings. But as strings references are recognized
          // TODO because the names are stored as strings in pug. But the references are also not found;
          let currentstate = 'redcostotalppl' * 25 * 'redcostotalhrs';
         console.log(currentstate);
         let goalstate = 'redcosfutureppl' * 25 * 'redcosfuturehrs';
         console.log(goalstate);
         let redcostotal = currentstate - goalstate;
         console.log(redcostotal);

         return redcostotal;
      },
    required: false
  },
});


module.exports = mongoose.model("WSJF", WSJF);
