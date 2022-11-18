var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "JirasakPRJ2022KPRU";
app.use(express.static('public'));
var PORT = env.PORT || 5409;
var cors = require("cors");
var sql = require("mssql");

var configdb = {
  user: "merlin",
  password: "Admin5409",
  server: "thaiserve.database.windows.net",
  database: "dbproject",
};
app.use(cors());
app.listen(PORT, function () {
  console.log("app runing port ", { PORT });
});
app.get("/", function (req, res, next) {
  res.send("API is Run!!");
});
module.exports = app;
