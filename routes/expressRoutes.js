var express = require("express");
var mongoose = require("mongoose");
var Article = require("../models/Article.js");
var router = express.Router();

//get's all saved articles from mongodb
router.get("/api/saved", function(req, res){
  Article.find({}, function(err, docs){
    if(err)
      return res.send(err);
    res.json(docs);
  });
});

//add new saved article to mongodb
router.post("/api/saved", function(req, res){
  var newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });
  newArticle.save(function(err){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});

//delete article from mongodb
router.delete("/api/saved", function(req, res){
  Article.remove({_id:req.body.id}, function(err, doc){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});

router.get("*", function(req, res){
  res.sendFile(__dirname + "../public/index.html");
});

module.exports = router;