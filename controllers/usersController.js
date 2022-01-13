const { Department, User } = require("../models");

const usersController = {};

usersController.create = async (req, res) => {
  const user = await new User(req.body);
  user.save().then((result) => {
    res.redirect("/users").catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
  });
};

usersController.getAll = async (req, res) => {
  User.findAll()
    .then((result) => {
      res.render("users/index", { users: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

usersController.getOne = async (req, res) => {
  const id = req.params.id;
  User.findOne({ where: { id } })
    .then((result) => {
        res.render("users/user", { user: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

usersController.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });
    await user.destroy();
    return res.json({ message: "row deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

usersController.update = async (req, res) => {
  const id = req.params.id;
  const { name, email, password, departmentId } = req.body;
  try {
    const user = await User.findOne({ where: { id } });

    user.name = name;
    user.email = email;
    user.password = password;
    user.departmentId = departmentId;

    await user.save();

    return res.json({ message: "row updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

usersController.departmentUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const departmentUsers = await User.findAll({ where: { departmentId: id } });
    return res.json({ departmentUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { usersController };
