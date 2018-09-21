// We could have called this file App.js
// But that might be less clear
// I've been using: <yarn test> to run the tests

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// it = App.test.js
it('shows a comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // Here we can inpect the div that lives inside JSDOM
  // Looks inside the div
  // and checks tot see if the CommentBox is in there

  // console.log(div.innerHTML);
  // This isn't a good test
  expect(div.innerHTML).toContain('Comment box');

  // Clean-up: for performance
  // Destroys leftover objects
  // If we don't call this, the component will remain for as long as the
  // test suite is running, which slows down the running of large
  // test suites
  ReactDOM.unmountComponentAtNode(div);
});
