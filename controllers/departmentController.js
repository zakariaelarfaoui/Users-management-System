const { Department, User } = require("../models");

const departmentController = {};

departmentController.getAll = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.render("departments/index", { departments });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

departmentController.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findOne({ where: { id } });
    const users = await User.findAll({ where: { departmentId: id} });
    res.render("departments/details", { department, users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

departmentController.delete = async (req, res) => {
  const id = req.params.id;
  Department.destroy({ where: { id } })
    .then((result) => {
      res.redirect("/departments");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
};

departmentController.update = async (req, res) => {
  const id = req.params.id;
  const { newName, newDescription } = req.body;
  Department.findOne({ where: { id } })
    .then((result) => {
      result.name = newName;
      result.description = newDescription;
      result.save();
      res.redirect("/departments");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
};

departmentController.create = async (req, res) => {
  const department = await new Department(req.body);
  department.save().then((result) => {
    res.redirect("/departments").catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
  });
};

module.exports = {
  departmentController,
};
