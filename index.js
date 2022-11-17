var express = require("express");
var app = express();
var PORT = 5409;
var cors = require("cors");
var sql = require("mssql");
var configdb = {
  user: "Merlin",
  password: "Jirasak5409",
  server: "jirasak.database.windows.net",
  database: "jirasakdb",
};
app.use(cors());
app.listen(PORT, function () {
  console.log("app runing port ",{PORT});
});
app.get('/',function(req,res,next){
    res.send("API is Run!!")
})
app.get('/conn',function(req,res,next){
     // connect to your database
     sql.connect(configdb, function (err) {
        if (err) console.log(err);
    
        // create Request object
        var request = new sql.Request();
    
        // query to the database and get the records
        request.query("select * from dbo.product", function (err, results) {
          if (err) console.log(err);
    
          // send records as a response
          res.send(results.recordset);
          console.log(results.recordset)
        });
      });
})


module.exports = app;
