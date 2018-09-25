import React from 'react';
import { mount } from 'enzyme';
// mount is used for Full DOM rendering method
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    // Note that we are using the html name 'change' instead of react onChange
    wrapped.update();
    // This forces the component to update immediately instead of asychronously
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit'); // wrapped.find('button') also worked
    wrapped.update();
    expect(wrapped.find('textarea').text()).toEqual('');  // I wrote this
    expect(wrapped.find('textarea').prop('value')).toEqual('');  // He wrote this
  });
});
