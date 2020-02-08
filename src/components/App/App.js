import React from 'react';
import { object } from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import styles from './App.module.scss';

const App = ({ history }) => (
  <div className={styles.app}>
    <Router history={history}>
      <Switch>
        <Route path={'/'} exact component={Home} />
      </Switch>
    </Router>
  </div>
);

App.propTypes = {
  history: object
};

export default App;
