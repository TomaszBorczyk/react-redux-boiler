import {shallow} from 'enzyme';
import * as React from 'react';

import {AppContainer} from './AppContainer';

describe('AppContainer test', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppContainer />);

    expect(wrapper.find('div.title')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
