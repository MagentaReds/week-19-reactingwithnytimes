
var Link = require("react-router").Link;


import React, {Component} from "react";

class Saved extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading panelBack">
          <span className="glyphicon glyphicon-paperclip">Saved Articles</span> 
        </div>
        <div id="our-results" className="panel-body">
          
          <div id="result_1" className="well">
            <h2><span className="btn btn-primary">1</span> The Art oF Fake</h2>
            <p>by BARNET L. LICHENSTEIN</p>
            <p>Section: Opinon</p>
            <p>9817329857239587239587</p>
            <a>http://www.nytimes.com/2017/02/01/opinion/the-art-of-the-deal-in-afghanistan.html</a>
          </div>
            
        </div>
      </div>
    );
  }
}

module.exports = Saved;