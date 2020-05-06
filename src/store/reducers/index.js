
import { combineReducers } from 'redux';

import post from './PostReducer';
import posts from './PostsReducer';

export default combineReducers({
  post, posts
});