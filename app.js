const express = require("express");
const morgan = require("morgan");

const departmentRoutes = require("./routes/departments");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", userRoutes, departmentRoutes);
app.use(morgan('dev'))

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); 
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/stylesheets/fontawesome",
  express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/")
);

app.use((req, res) => {
  res.status(404).render("404")
})

app.listen({ port: 8000 }, () => {
  console.log("server running on http://localhost:8000");
});
