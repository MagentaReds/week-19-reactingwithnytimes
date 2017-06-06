// var router = require("react-router-dom");
// var Route = router.Route;
// var Link = require("react-router-dom").Link;

import {Route, Link} from "react-router-dom";

var helpers = require("./utils/helpers.js");

import Search from "./children/Search.js";
import Saved from "./children/Saved.js";
import Results from "./children/Results.js";
import MoreInfoModal from "./children/MoreInfoModal.js";

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

    this.setSearch = this.setSearch.bind(this);
    this.setResults = this.setResults.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidUpdate(prevState) {
    //console.log(this.state.savedArticles);
  }

  componentDidMount() {
    // Get the latest history.
    helpers.getSavedArticles().then((response) => {
      //console.log(response);
      if (response.data !== this.state.savedArticles) {
        //console.log("Saved Articles", response.data);
        this.setState({ savedArticles: response.data });
      }
    });
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
    //console.log("Saving article at index " +index+" to mongodb");
    helpers.saveArticle(this.state.searchResults[index]).then((response) => {
      this.getArticles();
    });
  }

  removeArticle(id) {
    //console.log("Removing article with id " +id+" from mongodb");
    helpers.removeArticle(id).then((response) => {
      this.getArticles();
    });
  }

  getArticles() {
    //console.log("Getting all saved articles from mongodb");
    helpers.getSavedArticles().then((response) => {
      this.setState({savedArticles: response.data});
    });
  }

  clearSearch() {
    //console.log("Clearing search history and resetting the search fields");
    var newState = {
      searchTerm: "", 
      limit: 5,
      startYear: "",
      endYear: "",
      searchResults: []
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron background">
          <div className="headertext">
          <h1>Scott's Tots NYT Search</h1>
          <p>The World's Second Finest News Source</p>
          </div>
          <a className="btn btn-primary btn-lg" href="#moreInfoModal" data-toggle="modal" >Learn more</a>
          <Link to="/results"><button className="btn btn-success btn-lg">Results</button></Link>
          <Link to="/saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
        </div>
        <Search setSearch={this.setSearch} setResults={this.setResults} clearSearch={this.clearSearch}/> 
        <br/><br/>
        <div>
          <Route exact path="/" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle}/>}/>
          <Route path="/results" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle}/>} />
          <Route path="/saved" render={()=><Saved savedArticles={this.state.savedArticles} removeArticle={this.removeArticle}/>} />
        </div>
        <MoreInfoModal />
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


export default Main;