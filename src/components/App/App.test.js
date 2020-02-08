import React from 'react';
import { shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import App from './App';

describe('App Component', () => {
  const history = createBrowserHistory();

  const render = () => shallow(<App history={history} />);

  it('should render', () => {
    const component = render();

    expect(component).toBeTruthy();
  });
});
