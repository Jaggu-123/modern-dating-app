import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import fbConfig from "./config/fbconfig";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import reducer from "./reducers"; // Gets the State from the reducer(s)

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];
let store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(...middleware),
    reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // Creates the store from the State received from the reducer(s)

export default store;
