import { ActionTypes } from '../constants';

const initialState = {
  isLoading: null,
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS_LOADING:
      return { 
        ...state, 
        isLoading: true,
      };

    case ActionTypes.SET_COMMENTS:
      return { 
        ...state,
        isLoading: false,
        comments: [...action.payload] 
      };
    default:
      return state;
  }
};

export default commentsReducer;