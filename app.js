const express = require("express");
const app = express();
app.use(express.json());

const {
  getAll,
  getOne,
  deleteDepartment,
  create,
  update,
} = require("./controllers/departmentController");

app.get("/departments", getAll);
app.get("/department/:id", getOne);
app.post("/departments", create);
app.delete("/department/:id", deleteDepartment);
app.put("/department/:id", update);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
