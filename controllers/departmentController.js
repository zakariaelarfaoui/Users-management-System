const { sequelize, Department } = require("../models");

const departmentController = {};

departmentController.getAll = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.render("departments/index", { departments });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

departmentController.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findOne({ where: { id } });
    res.render('departments/department', { department})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

departmentController.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findOne({ where: { id } });
    await department.destroy();
    return res.json({ message: "row deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

departmentController.update = async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  try {
    const department = await Department.findOne({ where: { id } });

    department.name = name;
    department.description = description;

    await department.save();

    return res.json({ message: "row updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

departmentController.create = async (req, res) => {
  const { name, description } = req.body;
  try {
    const department = await Department.create({ name, description });
    res.redirect("departments")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  departmentController,
};
