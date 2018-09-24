import { SAVE_COMMENT } from 'actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
      // takes existing comments, and adds them to the new array
      // adds new comment to new array
    default:
      return state;
  }
}
