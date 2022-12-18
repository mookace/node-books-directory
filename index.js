const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const flash = require("connect-flash");

const port = process.env.PORT || 8001;
module.exports = port;

const { sequelize } = require("./models");
const bookRoutes = require("./routes/bookRoutes");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(flash());

// routes

app.use("/", bookRoutes);

const connectDb = async () => {
  console.log("Checking database connection.......");
  try {
    await sequelize.authenticate();
    console.log("Database connection Success");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1);
  }
};

// Server Connection
(async () => {
  await sequelize.sync();
  await connectDb();
  console.log(`Attempting to run server on port ${port}`);
  app.listen(port, () => {
    console.log(`Server is running on port =${port}`);
  });
})();
