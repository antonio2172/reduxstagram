// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

function postComments(state = [], action) {
  // console.log("😬 postComments reducer", state, action);
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      console.log("Removing a comment 🤭");
      // return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  // this is called reducer composition!! 👽
  if (typeof action.postId !== 'undefined') {
    console.log("😬 comments reducer", state, action);
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;
}

export default comments;
