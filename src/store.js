import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import throttle from 'lodash.throttle';
import rootReducer from "./redux/reducers";
import { saveState, loadState} from './common/localeStorage'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persistedState=loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composedEnhancer
);

store.subscribe(throttle(()=> {
    saveState(store.getState())
},1000));

export default store;
