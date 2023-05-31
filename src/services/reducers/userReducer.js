import { ActionTypes } from '../constants';

const initialState = {
  info: {},
  posts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      return { ...state, info: action.payload };
    case ActionTypes.SET_USER_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default userReducer;