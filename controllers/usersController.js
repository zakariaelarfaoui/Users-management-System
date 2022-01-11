const { sequelize, User, Department } = require("../models");

const usersController = {};

usersController.create = async (req, res) => {
  const { id, name, email, password, departmentId } = req.body;
  try {
    const department = await Department.findOne({ where: id });
    const user = await User.create({
      name,
      email,
      password,
      departmentId: department.id,
    });
    return res.json(user);
    return res.json({ message: "row inserted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {usersController};