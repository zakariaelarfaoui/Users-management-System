const departmentController = require("./../controllers/departmentController");
const usersController = require("./../controllers/usersController");

module.exports = function (express) {
  const route = express.Router(); 
  route.get("/department", departmentController.getAll);
  route.get("/department/:id", departmentController.getOne);
  route.post("/department", departmentController.create);
  route.put("/department/:id", departmentController.update);
  route.delete("/department/:id", departmentController.delete);
  route.get("/departmentWithUsers", departmentController.getDepartmentUsers);
  route.get("/user", userController.getAll);
  route.get("/user/:id", userController.get);
  route.post("/user", userController.create);
  route.put("/user/:id", userController.update);
  route.delete("/user/:id", userController.delete);
  return route;
};
module.exports = self;
