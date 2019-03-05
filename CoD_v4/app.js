// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const WSJFController = require("./controller/WSJFController");
//const UserController = require("./controller/UserController");



// db instance connection
require("./config/db");


app.use('/public', express.static(__dirname + '/public'));
app.use(router);

const port = process.env.PORT || 3305;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3305/");

//configuration of the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//here we define the views engine. we will use pug
app.set('views engine', 'pug');

//middleware for requests



// API ENDPOINTS/routes
//index page
app
    .route('/')
    .get(function (req, res) {
      res.render('index.pug');
    });

//avoid cost calc
app
    .route('/calculator')
    .get(function (req, res) {
        res.render('calculator.pug');
    });
//post a new avoid cost item & list all items
app
    .route("/post_WSJF_item")
    .get(WSJFController.listAllWSJFItems)
    .post(WSJFController.createWSJFItem);

//get a specific item and update a specific item
app
    .route("/:WSJF_item_id")
    //.delete(WSJFController.deleteWSJFItem)
    .get(WSJFController.listWSJFItem);
    //.post(WSJFController.updateWSJFitem);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
