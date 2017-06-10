import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import './assets/stylesheets/global.css';

const App = () => (
  <div><Routes /></div>
);

ReactDOM.render(<App />, document.getElementById('react-core'));
registerServiceWorker();
