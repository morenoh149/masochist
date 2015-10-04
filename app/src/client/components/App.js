'use strict';

import React from 'react';
import Relay from 'react-relay';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.viewer.name}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
      }
    `,
  },
});