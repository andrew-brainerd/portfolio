import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import styles from './App.module.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <div className={styles.app}>
      <Router history={history}>
        <Switch>
          <Route path={'/'} exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
