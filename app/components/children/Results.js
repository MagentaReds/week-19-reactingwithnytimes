import React, {Component} from "react";

const Results = (props) => {
  const saveArticle = (event) =>{
    var index = event.target.name;
    props.saveArticle(index);
  }

  return (
    <div className="panel panel-primary">
      <div className="panel-heading panelBack">
        <span className="glyphicon glyphicon-paperclip"> Results</span> 
      </div>
      <div id="our-results" className="panel-body">
        
        {props.passedResults.map((article, i) => (
            <div key={i} id={"result_"+(i+1)} className="well">
              <h2><span className="btn btn-primary">{i+1}</span>{article.headline.main}</h2>
              <p>{article.byline ? article.byline.original : "No Author"}</p>
              <p>{article.section_name}</p>
              <p>{article.pub_date}</p>
              <a href={article.web_url} target="_blank" >{article.web_url}</a>
              <br/>
              <button name={i} className="btn btn-primary" onClick={saveArticle}>Save Article</button>
            </div>
          ))
        }
          
      </div>
    </div>
  );
}


export default Results;