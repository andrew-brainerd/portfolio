import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Component', () => {
  const render = () => shallow(<Home />);

  it('should render', () => {
    const component = render();

    expect(component).toBeTruthy();
  });
});
