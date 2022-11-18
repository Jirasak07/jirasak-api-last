var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "JirasakPRJ2022KPRU";
app.use(express.static('public'));
var PORT = 5409;
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

// test Api

app.post("/conn",jsonParser, function (req, res, next) {
  // connect to your database
  sql.connect(configdb, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    // var pid = 1234
    // var pname = 'req.body.pname'
    var pid = req.body.pid
    var pname = req.body.pname
    request.query(`UPDATE dbo.product SET pid = ${pid},pname= '${pname}' WHERE pid = 1234   `, function (err, results) {
    // request.query(`INSERT INTO dbo.product (pid,pname) VALUES (${pid},'${pname}')  `, function (err, results) {
    // request.query(`select * from dbo.product where pid = ${value} `, function (err, results) {
      if (err) console.log(err);
      // send records as a response
      // res.send(results.recordset);
      res.json("success")

      console.log(results.recordset);
    });
  });
});
// manage user
  // app.get("add-user",jsonParser,function(req,res,next){
  //   sql.connect(configdb,function(err){
  //     if (err) console.log(err);
  //   var requestGet = new sql.Request();
  //   requestGet.query('SELECT max(uid) as maxuid FROM user ',function(err,resultsId){
  //     res.json(resultsId.recordset.maxuid)
  //   })
  //   var username = req.body.username
  //   var uid = 0
  //   var uname = req.body.uname
  //   var mid = req.body.mid
  //   var role_id = req.body.role_id
  //   var ustatus = req.body.ustatus
  //   })
  // })
// end manage user
// ${req.body.pid}
// end test Api

// Product

//

// end Product

module.exports = app;
