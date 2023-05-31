import { ActionTypes } from '../constants';

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS:
      return { ...state, [action.payload.postId]: action.payload.comments };
    default:
      return state;
  }
};

export default commentsReducer;