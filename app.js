const express = require("express");
const app = express();
app.use(express.json());

// const {departmentRoutes} = require("./routes/departments")
const { userRoutes } = require("./routes/users");

app.use("/", userRoutes);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
