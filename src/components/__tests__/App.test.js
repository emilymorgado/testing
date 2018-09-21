import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


it('shows a comment box', () => {
  const wrapped = shallow(<App />);
  // wrapped means: component with additional functionality on top

  expect(wrapped.find(CommentBox).length).toEqual(1);
  // find returns an array with every instance of CommentBox that it finds
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});


// THESE ARE NOTES FOR LEARNING ONLY
// We could have called this file App.js
// But that might be less clear
// I've been using: <yarn test> to run the tests

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../App';
// it = App.test.js
// it('shows a comment box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   // Here we can inpect the div that lives inside JSDOM
//   // Looks inside the div
//   // and checks tot see if the CommentBox is in there
//
//   // console.log(div.innerHTML);
//   // This isn't a good test because it looks at the internal
//   // workings of the comment box
//   expect(div.innerHTML).toContain('Comment box');
//
//   // Clean-up: for performance
//   // Destroys leftover objects
//   // If we don't call this, the component will remain for as long as the
//   // test suite is running, which slows down the running of large
//   // test suites
//   ReactDOM.unmountComponentAtNode(div);
// });
