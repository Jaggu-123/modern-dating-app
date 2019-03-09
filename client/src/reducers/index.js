// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./counter";
import userReducer from "./UserReducer";
// import secondCounter from './exampleReducer';

export default combineReducers({
  user: userReducer
});

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
