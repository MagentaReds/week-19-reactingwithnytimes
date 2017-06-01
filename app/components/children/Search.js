
var Link = require("react-router").Link;


import React, {Component} from "react";

class Search extends Component {
  render() {
    return (

      <div className="panel panel-primary">
      {/*<!-- Search Paramemters Box -->*/}
        <div className="panel-heading panelBack">
            <span className="glyphicon glyphicon-th-list"> Search Parameters</span> 
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="searchTerm">Search Term</label>
              <input type="text" className="form-control" id="searchTerm" placeholder="Search anything"/>
            </div>
            <div className="form-group">
              <label htmlFor="retrieveNumber">Number of Records to Retrieve</label>
              <select className="form-control" id="retrieveNumber" value="5">
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
              <input type="text" className="form-control" id="startYear" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="endYear">End Year (Optional)</label>
              <input type="text" className="form-control" id="endYear" placeholder=""/>
            </div>
            <button id="searchButton" className="btn btn-default">Search</button>
            <button id="clearButton" className="btn btn-default">Clear Results</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Search;