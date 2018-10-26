//middlewares are functions that return functions
// cleaned up {} and return because it's only returning one thing and it's and arrow function
//next is a function, it's a reference to the next middleware in our chain
//the action from the action creator, object with a type prop
export default ({ dispatch }) => next => action => {

};




  // //middlewares are functions that return functions
  // export default function({ dispatch }) {
  //   return function(next) { //next is a function, it's a reference to the next middleware in our chain
  //     return function(action) { //the action from the action creator, object with a type prop
  //
  //     }
  //   }
  // }
