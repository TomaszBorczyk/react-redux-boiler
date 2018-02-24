import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Button} from '../../dumb/Button/Button';
import {messageOnHello} from './helloButton.duck';
import {HelloButtonDispatchProps, HelloButtonProps} from './HelloButtonProps';

export class HelloButtonComponent extends React.Component<HelloButtonProps & HelloButtonDispatchProps> {
  private onHello = () => {
    const message = `Hello ${this.props.myName}. Today is ${new Date().getTime()}`;

    return this.props.onHello(message);
  }

  public render(): JSX.Element {
    return (
      <Button label="Hello me" onClick={this.onHello} />
    );
  }
}

const mapDispatchToProps = (dispatch): HelloButtonDispatchProps => bindActionCreators({
  onHello: messageOnHello
}, dispatch);

export const HelloButton = connect<{}, HelloButtonDispatchProps, HelloButtonProps>(
  null,
  mapDispatchToProps
)(HelloButtonComponent);
