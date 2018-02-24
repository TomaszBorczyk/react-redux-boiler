import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {AppContainerComponent} from './AppContainer';
import {AppContainerStateProps} from './AppContainerProps';

describe('AppContainer test', () => {
  let componentProps: AppContainerStateProps;
  let helloMessage: string;

  let wrapper: ShallowWrapper;

  helloMessage = 'test hello message';
  componentProps = {
    helloMessage
  };

  beforeEach(() => {
    wrapper = shallow(<AppContainerComponent {...componentProps}/>);
  });

  it('should render correctly', () => {

    const HelloButton = 'Connect(HelloButtonComponent)';

    expect(wrapper.find('div.title')).toHaveLength(1);
    expect(wrapper.find('div.title').props().children).toContain(componentProps.helloMessage);
    expect(wrapper.find(HelloButton)).toHaveLength(1);
  });
});
