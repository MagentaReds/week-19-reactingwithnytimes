//new in v4 react-router-dom, replaces the need for <Router history={hashHistory}>
//used for modern HTML5 browsers use HashRouter for legacy browsers
//var hashHistory = router.hashHistory;

import Main from "../components/Main.js";
import React from "react";
import {Route, BrowserRouter} from "react-router-dom";


module.exports = (

  <BrowserRouter>
      <Route path="/" component={Main}>
      </Route>
  </BrowserRouter>

);