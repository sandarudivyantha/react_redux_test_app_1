// import { createStore, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers/index";

// const middleware = [thunk];
// const initialState = {};

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
//   )
// );

import { configureStore } from '@reduxjs/toolkit';
import { thunk } from "redux-thunk"; 
import rootReducer from './reducers/index';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});

export default store;