import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
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
