import React from 'react';
import { shallow } from 'enzyme';
import HomeLink from './HomeLink';

describe('HomeLink Component', () => {
  let props;

  beforeEach(() => {
    props = {
      path: 'https://google.com'
    }
  });

  const render = () => shallow(<HomeLink {...props} />);

  it('should render', () => {
    const component = render();

    expect(component).toBeTruthy();
  });
});
