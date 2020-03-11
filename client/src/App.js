// Importing necessary files
// Importing necessary React components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import NoMatch from "./pages/NoMatch.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;