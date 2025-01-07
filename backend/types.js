const z = require("zod");

const createTodo = z.object({
  title: z.string().min(1),
  description: z.string(),
});

const updateTodo = z.object({
 _id: z.string().min(1),
});

module.exports = { createTodo, updateTodo };
