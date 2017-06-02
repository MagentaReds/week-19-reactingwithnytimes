var router = require("react-router-dom");
var Route = router.Route;
var Link = require("react-router-dom").Link;
var IndexRoute = router.IndexRoute;

var Search = require("./children/Search.js");
var Results = require("./children/Results.js");
var Saved = require("./children/Saved.js");

import React, {Component} from "react";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = { 
      searchTerm: "", 
      limit: 5,
      beginYear: "",
      endYear: "",
      searchResults: [], 
      savedArticles: []
    };
  }


  setSearch(term, limit, beginYear, endYear) {
    this.setState({
      searchTerm: term,
      limit: limit,
      beginYear: beginYear,
      endYear: endYear
    });
  }

  setResults(results) {
    this.setState({searchResuts: results});
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron background">
          <div className="headertext">
          <h1>Scott's Tots NYT Search</h1>
          <p>The World's Second Finest News Source</p>
          </div>
          <a className="btn btn-primary btn-lg" href="http://giphy.com/gifs/ohio-john-kasich-scotts-tots-uCxR4xD2XDfhK" target="_blank" role="button">Learn more</a>
          <Link to="/results"><button className="btn btn-success btn-lg">Results</button></Link>
          <Link to="/saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
        </div>
        <Search setSearch={this.setSearch} setResults={this.setResults}/> 
        <br/><br/>
        <div>
          {this.props.children}
          <Route exact path="/" component={Results}/>
          <Route path="/results" component={Results} />
          <Route path="/saved" component={Saved} />
        </div>
      </div>
      
    );
  }
}

//test main for reference
/*class Main extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/results"><button className="btn btn-default">Results</button></Link>
        <Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
        <h1> THIS IS A THING </h1>
        <Search thing={"Hello"} />
        {this.props.children}
        <div>
          <Route exact path="/" component={Results}/>
          <Route path="/results" component={Results} />
          <Route path="/saved" component={Saved} />
        </div>
      </div>
      
    );
  }
}*/


module.exports = Main;