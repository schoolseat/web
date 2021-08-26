import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import {
  Login,
  SingIn,
  Profile,
  Welcome,
  Calendar,
  NotFound,
} from './index';

import { Header } from '../components';

function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <Header />
            <Welcome />
          </>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/singin" component={SingIn} />
        <Route exact path="/profile">
          <>
            <Header />
            <Profile />
          </>
        </Route>
        <Route exact path="/calendar">
          <>
            <Header />
            <Calendar />
          </>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
}

export default router;
