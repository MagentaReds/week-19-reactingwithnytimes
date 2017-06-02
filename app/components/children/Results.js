
var Link = require("react-router").Link;


import React, {Component} from "react";

class Results extends Component {
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
                <p>{article.byline.original}</p>
                <p>{article.section_name}</p>
                <p>{article.pub_date}</p>
                <a href={article.web_url} target="_blank" >{article.web_url}</a>
              </div>
            );
          })}
          
            
        </div>
      </div>
    );
  }
}

module.exports = Results;