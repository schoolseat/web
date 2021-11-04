import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { useApi } from '../hooks/auth';

import {
  Login,
  SignIn,
  Profile,
  Welcome,
  Calendar,
  NotFound,
  ClassesPage,
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
        <Route exact path="/signin" component={SignIn} />

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
            <Route exact path="/classes">
              <>
                <Header />
                <ClassesPage />
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
