const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mandeep:IohOFa3hYeqZMyzU@personaluse.uzcky.mongodb.net/todo-app");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };
