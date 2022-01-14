const express = require("express");
const departmentRoutes = express.Router();

const {departmentController} = require("./../controllers/departmentController");

departmentRoutes.get("/departments", departmentController.getAll);
departmentRoutes.get("/department/:id", departmentController.getOne);
departmentRoutes.post("/departments", departmentController.create);
departmentRoutes.post("/department/:id", departmentController.update);
departmentRoutes.get("/departments/:id", departmentController.delete);

module.exports =  departmentRoutes ;
