import React, {Component} from "react";

const Saved = (props) => {
  const removeArticle = (event) =>{
    var index = event.target.name;
    props.removeArticle(index);
  }

  return (
    <div className="panel panel-primary">
      <div className="panel-heading panelBack">
        <span className="glyphicon glyphicon-paperclip"> Saved Articles</span> 
      </div>
      <div id="our-results" className="panel-body">
        
        {props.savedArticles.map((article, i) => (
            <div key={i} id={"result_"+(i+1)} className="well">
              <h2><span className="btn btn-primary">{i+1}</span>{article.headline}</h2>
              <p>{article.by}</p>
              <p>{article.section}</p>
              <p>{article.pubDate}</p>
              <a href={article.url} target="_blank" >{article.web_url}</a>
              <br/>
              <button name={article._id} className="btn btn-primary" onClick={removeArticle}>Unsave Article</button>
            </div>
          ))
        }
          
      </div>
    </div>
  );
}

export default Saved;