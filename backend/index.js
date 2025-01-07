const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "invalid inputs"
    });
    return;
  }
  await todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false
  })
  res.status(200).json({
    msg: "todo created successfully", 
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.status(200).json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "invalid inputs",
    });
    return;
  }
  await todo.update({ _id: req.body.id }, { completed: true });
  res.status(200).json({
    msg: "todo updated successfully",
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
