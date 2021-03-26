import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import DuplicatePost from "./pages/DuplicatePost";
import PostsPage from "./pages/PostsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/duplicate" component={DuplicatePost} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
