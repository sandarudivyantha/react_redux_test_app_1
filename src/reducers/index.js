// Root reducer - All the reducers insert into here and export as a one reducer

import { combineReducers } from "redux";

import AllPostsReducer from "./allPostsReducer";
import SelectedPostReducer from "./selectedPostReducer";

const rootReducer = combineReducers({
  allPosts: AllPostsReducer,
  selectedPost: SelectedPostReducer,
});

export default rootReducer;
