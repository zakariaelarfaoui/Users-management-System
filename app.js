const express = require("express");
const app = express();
app.use(express.json());

const { departmentController } = require("./controllers/departmentController");
const { usersController } = require("./controllers/usersController");

app.get("/departments", departmentController.getAll);
app.get("/department/:id", departmentController.getOne);
app.post("/departments", departmentController.create);
app.delete("/department/:id", departmentController.delete);
app.put("/department/:id", departmentController.update);

app.get("/users", usersController.getAll);
app.get("/user/:id", usersController.getOne);
app.post("/users", usersController.create);
app.delete("/user/:id", usersController.delete);
app.put("/user/:id", usersController.update);
app.get("/departmentUsers/:id", usersController.departmentUsers);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
