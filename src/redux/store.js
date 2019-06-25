import { combineReducers, createStore } from 'redux';
import menuReducer from './menuReducer';
import buttonSendReducer from './buttonSendReducer';
import textContentReducer from './textContentReducer';

let reducers = combineReducers({
    menu: menuReducer,
    form: buttonSendReducer,
    textContent: textContentReducer
})
let store = createStore(reducers);
export default store
