import { ActionTypes } from '../constants';

const initialState = {
  post: [],
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case ActionTypes.SET_POSTS:
      return {
        ...state,
        post: action.payload
      }

    default:
      return state;
  }
};

export default postsReducer;