// Leading lowercase character is a convention that means the file
// will export by default a function (pascal case is for exporting classes)

import React, { Component } from 'react';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};
