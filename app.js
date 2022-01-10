const express = require("express");
const app = express();
app.use(express.json());

const { departmentController } = require("./controllers/departmentController");

app.get("/departments", departmentController.getAll);
app.get("/department/:id", departmentController.getOne);
app.post("/departments", departmentController.create);
app.delete("/department/:id", departmentController.delete);
app.put("/department/:id", departmentController.update);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
