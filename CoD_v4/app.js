// app.js

var express = require("express");
var bodyParser = require("body-parser");
var taskController = require("./controller/TaskController");
var WSJFController = require("./controller/WSJFController");




// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3304;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3304/node-demo");
app.use(bodyParser.urlencoded({ extended: true })); /*bodyParser is not defined: I NEED TO FIX THAT*/
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);
/* I NEED TO FINISH THIS. I CREATED A FILE CALLED WSJFitem.js in the model folder to define the model and pass the form data in the mongodb. The model route is defined in the html file in the form as action attribute
  */
app
    .route("/post_WSJF_item")
    .get(WSJFController.listAllWSJFtems)
    .post(WSJFController.createWSJFItem);
    /*
    .post(WSJFController.createWSJFitem)
    .delete(WSJFController.deleteWSJFitem);

/*
app
  .route("/post_WSJF_item/:WSJF_item_id") */



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
