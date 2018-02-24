import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {Button} from './Button';
import {ButtonProps} from './ButtonProps';

describe('Button tests', () => {
  let componentProps: ButtonProps;
  let label: string;
  let onClick;

  let wrapper: ShallowWrapper;
  let button;

  label = 'my label';
  onClick = jest.fn();
  componentProps = {
    label,
    onClick
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...componentProps}/>);
    button = wrapper.find('button');

  });

  it('should render correctly', () => {
    expect(button).toHaveLength(1);
    expect(button.props().children).toBe(label);
  });

  it('should call onClick function when clicked', () => {
    button.simulate('click');
    expect(onClick).toBeCalled();
  });
});
