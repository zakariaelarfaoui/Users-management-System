const express = require("express");
const userRoutes = express.Router();

const { usersController } = require("./../controllers/usersController");

userRoutes.get("/users", usersController.getAll);
userRoutes.get("/user/:id", usersController.getOne);
userRoutes.post("/users", usersController.create);
userRoutes.get("/users/:id", usersController.delete);
userRoutes.post("/user/:id", usersController.update);
userRoutes.get("/departmentUsers/:id", usersController.departmentUsers);

module.exports = userRoutes;
