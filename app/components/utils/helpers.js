// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//Grant's NYT Api Key, douhgnut steel
var apiKey =  "1021dd8629d24dae81e2576852693881";

// Helper functions for making API Calls
var helpers = {
  //returns a promise from axios get to the nytimes api.
  getNyTimesArticles: function(searchTerm, startYear, endYear){
    var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params = "?api-key="+apiKey;
    params+="&q="+searchTerm;
    if(startYear)
      params+="&begin_date="+startYear+"0101";
    if(endYear)
      params+="&end_date="+endYear+"1231";
    
    //console.log(baseUrl);
    //console.log(params);

    return axios.get(baseUrl+params);
  },

  saveArticle: function(article) {
    var newArticle = {
      headline: article.headline.main,
      section: article.section_name,
      pubDate: article.pub_date,
      url: article.web_url
    };
    newArticle.by = article.byline ? article.byline.original : "No Author";
    
    return axios.post("/api/saved", newArticle);
  },

  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  removeArticle: function(id){
    return axios.delete("/api/saved", {params: {id: id}});
  },
};

module.exports = helpers;