
var Link = require("react-router").Link;


import React, {Component} from "react";

class Saved extends Component {

  removeArticle(event){
    var index = event.target.name;
    this.props.removeArticle(index);
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading panelBack">
          <span className="glyphicon glyphicon-paperclip">Saved Articles</span> 
        </div>
        <div id="our-results" className="panel-body">
          
          {this.props.savedArticles.map(function(article, i){
            return (
              <div id={"result_"+(i+1)} className="well">
                <h2><span className="btn btn-primary">{i+1}</span>{article.headline}</h2>
                <p>{article.by}</p>
                <p>{article.section}</p>
                <p>{article.pubDate}</p>
                <a href={article.url} target="_blank" >{article.web_url}</a>
                <br/>
                <button name={article._id} className="btn btn-primary" onClick={this.removeArticle.bind(this)}>Unsave Article</button>
              </div>
            );
          }.bind(this))}
            
        </div>
      </div>
    );
  }
}

module.exports = Saved;