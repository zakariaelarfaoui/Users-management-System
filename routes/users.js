const express = require("express");
const userRoutes = express.Router();

const { usersController } = require("./../controllers/usersController");

userRoutes.get("/users", usersController.getAll);
userRoutes.get("/user/:id", usersController.getOne);
userRoutes.post("/users", usersController.create);
userRoutes.delete("/user/:id", usersController.delete);
userRoutes.put("/user/:id", usersController.update);
userRoutes.get("/departmentUsers/:id", usersController.departmentUsers);

module.exports = { userRoutes };
