import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./data/dataReducer";

const store = createStore(
  dataReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
