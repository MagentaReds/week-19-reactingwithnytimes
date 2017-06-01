var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(express.static("./public"));

if(process.env.MONGODB_URI){
  mongoose = connect(process.env.MONGODB_URI);
} else {
  mongoose = connect("mongodb://localhost/week19HW");
}

var db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});
db.once("open", function(){
  console.log("Mongoose connection successful");
});

var expressRoutes = require("./routes/experssRoutes.js");
app.use(expressRoutes);

app.listen(PORT, function(){
  console.log("App listening on PORT: "+PORT);
});