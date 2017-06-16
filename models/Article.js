var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline:{
    type: String
  },
  pubDate: {
    type:  String
  },
  url: {
    type: String,
    unique: true
  },
  by: {
    type: String,
    default: "No Author"
  },
  section: {
    type: String
  },
  dateSaved: {
    type: Date,
    default: Date.now
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;