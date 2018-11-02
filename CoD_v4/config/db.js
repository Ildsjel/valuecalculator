
const mongoose = require("mongoose");

const dbURI =
  "mongodb://johannes:N3cr0m4ni4c666!@valuecalc-shard-00-00-0nvz7.mongodb.net:3308,valuecalc-shard-00-01-0nvz7.mongodb.net:3308,valuecalc-shard-00-02-0nvz7.mongodb.net:3308/test?ssl=true&replicaSet=ValueCalc-shard-0&authSource=admin&retryWrites=true"
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// require any models

require("../model/Task");
