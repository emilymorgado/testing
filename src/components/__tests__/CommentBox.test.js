import React from 'react';
import { mount } from 'enzyme';
// mount is used for Full DOM rendering method
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  // Note that we are using the html name 'change' instead of react onChange
});
