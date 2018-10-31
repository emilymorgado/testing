//middlewares are functions that return functions
// cleaned up {} and return because it's only returning one thing and it's and arrow function
//next is a function, it's a reference to the next middleware in our chain
//the action from the action creator, object with a type prop
export default ({ dispatch }) => next => action => {
// This line didn't have to be written as curried functions
// it could have looked like this:
// export default ({ dispatch }, next, action) => {}

  if (!action.payload || !action.payload.then) {
    // send the action to the next middleware inside our chain
    return next(action);
  }

  action.payload.then(function(response) {
    // wait for it to resolve
    const newAction = { ...action, payload: response }; // this overwrites payload
    dispatch(newAction); // sends action through middleswares again
  });

};




  // //middlewares are functions that return functions
  // export default function({ dispatch }) {
  //   return function(next) { //next is a function, it's a reference to the next middleware in our chain
  //     return function(action) { //the action from the action creator, object with a type prop
  //
  //     }
  //   }
  // }
