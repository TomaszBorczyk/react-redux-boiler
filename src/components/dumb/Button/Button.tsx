import * as React from 'react';

import {ButtonProps} from './ButtonProps';

export class Button extends React.Component<ButtonProps> {
  public render(): JSX.Element {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}
