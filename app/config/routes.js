var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main.js");
var Search = require("../components/children/Search.js");
var Results = require("../components/children/Results.js");
var Saved = require("../components/children/Saved.js");

module.exports = {

  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="results" component={Results} />
      <Route path="saved" component={Saved} />
      <IndexRoute component={Results} />
    </Route>
  </Router>

};