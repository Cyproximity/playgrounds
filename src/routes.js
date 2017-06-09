import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import home from './routes/home';
import about from './routes/about';
import error404 from './routes/error404';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/me" component={about} />
      <Route component={error404} />
    </Switch>
  </Router>
);

export default Routes;
