// Root reducer - All the reducers insert into here and export as a one reducer

import { combineReducers } from "redux";

import AllPostsReducer from "./allPostsReducer";

const rootReducer = combineReducers({
  allPosts: AllPostsReducer,
});

export default rootReducer;
