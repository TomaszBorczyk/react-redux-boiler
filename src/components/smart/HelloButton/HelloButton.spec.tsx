import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {HelloButtonComponent} from './HelloButton';
import {HelloButtonDispatchProps, HelloButtonProps} from './HelloButtonProps';

jest.spyOn(Date.prototype, 'getTime').mockImplementation(() => 'time');

describe('HelloButton', () => {
  let onHello;
  let myName;
  let componentProps: HelloButtonProps & HelloButtonDispatchProps;

  let wrapper: ShallowWrapper;
  let Button;

  myName = 'name';
  onHello = jest.fn();
  componentProps = {
    myName,
    onHello
  };

  beforeEach(() => {
    wrapper = shallow(<HelloButtonComponent {...componentProps}/>);
    Button = wrapper.find('Button');
  });

  it('should properly render hello button', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should call onHello when clicked', () => {
    const message = `Hello ${myName}. Today is time`;

    Button.simulate('click');
    expect(onHello).toHaveBeenCalledWith(message);
  });
});
