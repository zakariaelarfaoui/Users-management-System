const express = require("express");
const app = express();

const { sequelize, Department } = require("../models");

async function getAll(req, res) {
  try {
    const department = await Department.findAll();
    return res.json(department);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

app.get("/", getAll);

app.listen({ port: 8000 }, async () => {
  console.log("server running on http://localhost:8000");
  await sequelize.authenticate();
  if (sequelize.authenticate()) {
    console.log("connection established");
  }
});
