import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import singlePostReducer from './SinglePostReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  singlePost: singlePostReducer,
});

export default rootReducer;
