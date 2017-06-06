var helpers = require("../utils/helpers.js");

import React, {Component} from "react";

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      limit: 5,
      startYear: "",
      endYear: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateLimit = this.updateLimit.bind(this);
    this.updateStartYear = this.updateStartYear.bind(this);
    this.updateEndYear = this.updateEndYear.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    //var inputs = $("#searchBox").serializeArray();

    var searchTerm = document.getElementsByName("searchTerm")[0].value;
    var limit = document.getElementsByName("retrieveNumber")[0].value;
    var startYear = document.getElementsByName("startYear")[0].value;
    var endYear = document.getElementsByName("endYear")[0].value;
    //console.log(searchTerm);

    this.props.setSearch(searchTerm, limit, startYear, endYear);
    this.setState({
      searchTerm: searchTerm,
      limit: limit, 
      startYear: startYear, 
      endYear: endYear
    });

    if(searchTerm) {
      helpers.getNyTimesArticles(searchTerm, startYear, endYear).then((response) => {
        //console.log(response);
        var returns = [];
        for(var i=0; i<limit && i<response.data.response.docs.length; ++i)
          returns.push(response.data.response.docs[i]);

        this.props.setResults(returns);
      });
    }
  }

  updateSearchTerm(event){
    this.setState({searchTerm: event.target.value});
  }
  updateLimit(event){
    this.setState({limit: event.target.value});
  }
  updateStartYear(event){
    this.setState({startYear: event.target.value});
  }
  updateEndYear(event){
    this.setState({endYear: event.target.value});
  }
  clearSearch(event) {
    event.preventDefault();
    var newState = {
      searchTerm: "", 
      limit: 5,
      startYear: "",
      endYear: "",
      searchResults: []
    };
    this.setState(newState);
    this.props.clearSearch();
  }

  render() {
    return (

      <div className="panel panel-primary">
      {/*<!-- Search Paramemters Box -->*/}
        <div className="panel-heading panelBack">
            <span className="glyphicon glyphicon-th-list"> Search Parameters</span> 
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit} id="searchBox">
            <div className="form-group">
              <label htmlFor="searchTerm">Search Term</label>
              <input type="text" className="form-control" name="searchTerm" placeholder="Search anything" value={this.state.searchTerm} onChange={this.updateSearchTerm}/>
            </div>
            <div className="form-group">
              <label htmlFor="retrieveNumber">Number of Records to Retrieve</label>
              <select className="form-control" name="retrieveNumber" value={this.state.limit} onChange={this.updateLimit}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="startYear">Start Year (Optional)</label>
              <input type="text" className="form-control" name="startYear" placeholder="" value={this.state.startYear} onChange={this.updateStartYear}/>
            </div>
            <div className="form-group">
              <label htmlFor="endYear">End Year (Optional)</label>
              <input type="text" className="form-control" name="endYear" placeholder="" value={this.state.endYear} onChange={this.updateEndYear}/>
            </div>
            <button type="submit" id="searchButton" className="btn btn-default">Search</button>
            <button id="clearButton" className="btn btn-danger" onClick={this.clearSearch}>Clear Results</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;