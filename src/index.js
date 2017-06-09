import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => (<h1>hello</h1>);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
