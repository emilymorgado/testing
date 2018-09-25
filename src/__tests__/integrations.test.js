import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
// This file can be broken into multiple files if the app gets big
// Example: commentsIntegrations.test.js

// stubRequst url comes from actions/index.js
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
})

afterEach(() => {
  moxios.uninstall();
});

// setTimeout is async and jest runs line by line, so it doesn't
// handle asyc code well
// Passing in done, tells jest to hold on, don't consider the test complete,
// until done is invoked
it('can fetch a list of comments and display them', done => {
  // Attempt to render the *entire* App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a TINY little pause to allow Moxios to finish
  // setTimeout is imprecise, so use moxios.wait() instead
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});


// setTimeout(() => {
//   wrapped.update();
//   // Expect to find a list of comments!
//   expect(wrapped.find('li').length).toEqual(2);
//   done();
//   wrapped.unmount();
// }, 200);
