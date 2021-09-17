import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { useApi } from '../hooks/auth';

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
  const { user } = useApi();

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

        { user
          && (
          <>
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
          </>
          )}
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
}

export default router;
