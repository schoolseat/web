import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { pageLanding, notFound, pageLogin } from './index';

function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={pageLanding} />
        <Route exact path="/login" component={pageLogin} />
        <Route component={notFound} />
      </Switch>
    </Router>

  );
}

export default router;
