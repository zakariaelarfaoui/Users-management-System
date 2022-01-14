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
  await User.findOne({ where: { id } })
    .then((result) => {
      res.render("users/details", { user: result });
    })
    .catch((error) => {
      console.log(error);
    });
};

usersController.delete = async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id } })
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
};

usersController.update = async (req, res) => {
  const id = req.params.id;
  const { newUserName, newUserEmail, newUserDepartment } = await req.body;
  await User.findOne({ where: { id } })
    .then((result) => {
      result.name = newUserName;
      result.email = newUserEmail;
      result.departmentID = newUserDepartment;
      result.save();
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
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
