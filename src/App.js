import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import SignUp from "./signUp"
import RssFeed from "./register"
import Top from "./top"

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/rss">
          <RssFeed />
        </Route>
        <Route path="/new">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
