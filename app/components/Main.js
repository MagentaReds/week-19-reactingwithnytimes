var React = require("react");
var Link = require("react-router").Link;

var Search = require("./children/Search.js");

import React, {Component} from "react";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1> THIS IS A THING </h1>
        <Search settHING={"hello"} />
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;