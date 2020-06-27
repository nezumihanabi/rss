import React from "react";
import {Route, Switch} from "react-router";
import SignUp from "./component/signUp"
import RssFeed from "./component/register"
import Top from "./component/top"
import {PATHS} from './route';

const App = () => {
  return (
    <Switch>
      <Route exact path={PATHS.login}>
        <Top/>
      </Route>
      <Route path={PATHS.rssFeed}>
        <RssFeed/>
      </Route>
      <Route path={PATHS.signUp}>
        <SignUp/>
      </Route>
      <Route path={PATHS.rssFeedList}>
        <SignUp/>
      </Route>
    </Switch>
  );
};
export default App;
