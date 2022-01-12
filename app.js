const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); 
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(
  "/stylesheets/fontawesome",
  express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/")
);

const departmentRoutes = require("./routes/departments");
const userRoutes = require("./routes/users");
app.use("/", userRoutes, departmentRoutes);

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
