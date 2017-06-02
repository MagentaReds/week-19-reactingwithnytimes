var express = require("express");
var mongoose = require("mongoose");
var Article = require("../models/Article.js");
var router = express.Router();

//get's all saved articles from mongodb
router.get("/api/saved", function(req, res){
  console.log("Gettiong all saved articles");
  Article.find({}, function(err, docs){
    if(err)
      return res.send(err);
    res.json(docs);
  });
});

//add new saved article to mongodb
router.post("/api/saved", function(req, res){
  console.log("Saving new article");
  var newArticle = new Article({
    headline: req.body.headline,
    pubDate: req.body.pubDate,
    url: req.body.url,
    section: req.body.section,
    by: req.body.by
  });
  newArticle.save(function(err){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});

//delete article from mongodb
router.delete("/api/saved", function(req, res){
  console.log("Removing article with id "+req.query.id);
  Article.findByIdAndRemove(req.query.id, function(err, doc){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});


module.exports = router;