var router = require("react-router-dom");
var Route = router.Route;
var Link = require("react-router-dom").Link;
var IndexRoute = router.IndexRoute;

var helpers = require("./utils/helpers.js");

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
      startYear: "",
      endYear: "",
      searchResults: [], 
      savedArticles: []
    };
  }

  componentDidUpdate(prevState) {
    console.log(this.state.savedArticles);
  }

  componentDidMount() {
    // Get the latest history.
    helpers.getSavedArticles().then(function(response) {
      console.log(response);
      if (response.data !== this.state.savedArticles) {
        console.log("Saved Articles", response.data);
        this.setState({ savedArticles: response.data });
      }
    }.bind(this));
  }

  setSearch(term, limit, startYear, endYear) {
    this.setState({
      searchTerm: term,
      limit: limit,
      startYear: startYear,
      endYear: endYear
    });
  }

  setResults(results) {
    this.setState({searchResults: results});
  }

  saveArticle(index) {
    console.log("Saving article at index " +index+" to mongodb");
    helpers.saveArticle(this.state.searchResults[index]).then(function(response){
      this.getArticles();
    }.bind(this));
  }

  removeArticle(id) {
    console.log("Removing article with id " +id+" from mongodb");
    helpers.removeArticle(id).then(function(response){
      this.getArticles();
    }.bind(this));
  }

  getArticles() {
    console.log("Getting all saved articles from mongodb");
    helpers.getSavedArticles().then(function(response){
      this.setState({savedArticles: response.data});
    }.bind(this));
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
        <Search setSearch={this.setSearch.bind(this)} setResults={this.setResults.bind(this)}/> 
        <br/><br/>
        <div>
          <Route exact path="/" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle.bind(this)}/>}/>
          <Route path="/results" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle.bind(this)}/>} />
          <Route path="/saved" render={()=><Saved savedArticles={this.state.savedArticles} removeArticle={this.removeArticle.bind(this)}/>} />
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