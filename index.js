var express = require("express");
var app = express();
var PORT = env.PORT || 5409;
app.listen(PORT, function () {
  console.log("app runing port ", { PORT });
});
app.get("/", function (req, res, next) {
  res.send("API is Run!!");
});
app.get('/gg',function(req,res,next){
  res.send("APII IIII")
})
module.exports = app;
