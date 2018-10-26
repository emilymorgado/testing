import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';

import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
// This component makes accessing the redux store easy
// Note: props.initialState is for testing purposes,
// That's why it's default is {}
