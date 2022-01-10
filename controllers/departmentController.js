const express = require("express");
const app = express();
app.use(express.json());

const { sequelize, Department } = require("../models");

async function getAll(req, res) {
  try {
    const departments = await Department.findAll();
    return res.json(departments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req, res) {
  const id = req.params.id;
  try {
    const department = await Department.findOne({ where: { id } });
    return res.json(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

async function deleteDepartment(req, res) {
  const id = req.params.id;
  try {
    const department = await Department.findOne({ where: { id } });
    await department.destroy();
    return res.json({message: 'row deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}


async function create(req, res) {
  const { name, description } = req.body;
  try {
    const department = await Department.create({ name, description });
    return res.json(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

app.get("/departments", getAll);
app.get("/department/:id", getOne);
app.post("/departments", create);
app.delete("/department/:id", deleteDepartment);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
