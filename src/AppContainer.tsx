import * as React from 'react';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {
  public render() {
    return (
      <div>
        <div className={styles.title}>Hello boilerplate!</div>
        <button value="button" />
      </div>
    );
  }
}
