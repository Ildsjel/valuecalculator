// app.js

var express = require("express"); /*express = Uncaught reference error - Needs to be fixed*/
var bodyParser = require("body-parser");
var WSJFController = require("./controller/WSJFController");




// db instance connection
require("./config/db");

const app = express();
app.use('/public', express.static(__dirname + '/public'));

const port = process.env.PORT || 3305;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3305/");
app.use(bodyParser.urlencoded({ extended: true })); /*bodyParser is not defined: I NEED TO FIX THAT*/
app.use(bodyParser.json());

//views engine
app.set('views engine', 'pug');



// API ENDPOINTS/routes

app
    .route('/')
    .get(function (req, res) {
      res.render('calculator.pug');
    });

app
    .route("/post_WSJF_item")
    .get(WSJFController.listAllWSJFtems)
    .post(WSJFController.createWSJFItem);
    //.delete(WSJFController.deleteWSJFitem);

/*
app
  .route("/post_WSJF_item/:WSJF_item_id") */



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
