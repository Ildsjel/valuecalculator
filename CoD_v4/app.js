// app.js

const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controller/TaskController");


// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3303;
app.use(bodyParser.urlencoded({ extended: true })); /*bodyParser is not defined: INEED TO FIX THAT*/
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
