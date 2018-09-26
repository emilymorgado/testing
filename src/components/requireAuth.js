// Leading lowercase character is a convention that means the file
// will export by default a function (pascal case is for exporting classes)

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just received new props (hence the update)
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        // This acts as a forced redirect
        this.props.history.push('/');
      }
    }

    // {...this.props} passes in any props that were passed to the HOC
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
