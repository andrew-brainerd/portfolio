import React from 'react';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';
import './index.scss';

WebFont.load({
  google: {
    families: [
      'Chilanka: 400',
      'Roboto Mono: 400'
    ]
  }
});

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
