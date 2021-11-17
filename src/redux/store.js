import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const enhancer = composeWithDevTools(applyMiddleware());

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}