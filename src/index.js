import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from "react-dom";
import { createHashHistory } from 'history';
import { Redirect, Link, Route, Router, withRouter } from 'react-router-dom';
import ShowApps from './ShowApps';

export const history = createHashHistory()

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/ShowApps" component={ShowApps} />
      </div>
    </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
