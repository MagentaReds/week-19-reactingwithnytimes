
var Link = require("react-router").Link;


import React, {Component} from "react";

class Results extends Component {

  saveArticle(event) {
    var index = event.target.name
    
    this.props.saveArticle(index);
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading panelBack">
          <span className="glyphicon glyphicon-paperclip">Results</span> 
        </div>
        <div id="our-results" className="panel-body">
          
          {this.props.passedResults.map(function(article, i){
            return (
              <div id={"result_"+(i+1)} className="well">
                <h2><span className="btn btn-primary">{i+1}</span>{article.headline.main}</h2>
                <p>{article.byline ? article.byline.original : "No Author"}</p>
                <p>{article.section_name}</p>
                <p>{article.pub_date}</p>
                <a href={article.web_url} target="_blank" >{article.web_url}</a>
                <br/>
                <button name={i} className="btn btn-primary" onClick={this.saveArticle.bind(this)}>Save Article</button>
              </div>
            );
          }.bind(this))}
          
            
        </div>
      </div>
    );
  }
}

module.exports = Results;