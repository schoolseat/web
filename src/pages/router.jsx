import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Login,
  SingIn,
  Welcome,
  NotFound,
} from './index';

function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/singin" component={SingIn} />

        <Route component={NotFound} />
      </Switch>
    </Router>

  );
}

export default router;
