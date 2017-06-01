var React = require("react");
var router = require("react-router-dom");

var Route = router.Route;

//new in v4 react-router-dom, replaces the need for <Router history={hashHistory}>
//used for modern HTML5 browsers use HashRouter for legacy browsers
var BrowserRouter = router.BrowserRouter;
//var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main.js");
var Search = require("../components/children/Search.js");
var Results = require("../components/children/Results.js");
var Saved = require("../components/children/Saved.js");


module.exports = (

  <BrowserRouter>
      <Route path="/" component={Main}>
      </Route>
  </BrowserRouter>

);