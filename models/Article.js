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
    type: String
  },
  by: {
    type: String,
    defaultValue: "No Author"
  },
  section: {
    type: String
  },
  dateSaved: {
    type: Date,
    defaultValue: Date.now
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;