import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import asynchronousComponent from './asyncComponent';
import VerticalNav from './components/VerticalNav/VerticalNav';

const Home = asynchronousComponent(() => System.import('./routes/home').then(module => module.default));
const About = asynchronousComponent(() => System.import('./routes/about').then(module => module.default));
const Exps = asynchronousComponent(() => System.import('./routes/experience').then(module => module.default));
const Error404 = asynchronousComponent(() => System.import('./routes/experience').then(module => module.default));

const Routes = () => (
  <div className="core--container">
    <VerticalNav />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/me" component={About} />
        <Route path="/experience" component={Exps} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
