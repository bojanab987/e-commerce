import { createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from 'lodash.throttle';
import rootReducer from "./redux/reducers";
import { saveState, loadState} from './common/localeStorage'

const persistedState=loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools()
);

store.subscribe(throttle(()=> {
    saveState(store.getState())
},1000));

export default store;
