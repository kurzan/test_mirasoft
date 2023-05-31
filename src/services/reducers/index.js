import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import userReducer from './userReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  comments: commentsReducer,
});

export default rootReducer;