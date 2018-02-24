import * as React from 'react';
import {connect} from 'react-redux';

import {AppContainerStateProps} from './AppContainerProps';
import {HelloButton} from './components/smart/HelloButton/HelloButton';

const styles: any = require('./AppContainer.scss');

export class AppContainerComponent extends React.Component<AppContainerStateProps> {
  public render() {
    return (
      <div>
        <div className={styles.title}>{this.props.helloMessage}</div>
        <HelloButton myName="John Smith"/>
      </div>
    );
  }
}

const mapStateToProps = (state): AppContainerStateProps => ({
  helloMessage: state.hello.message
});

export const AppContainer = connect<AppContainerStateProps, {}, {}>(
  mapStateToProps
)(AppContainerComponent);
