import { createStore, combineReducers } from 'redux';
import user from "./user"
import locale from "./locale"

let Reducer = combineReducers({user, locale})
let store = createStore(Reducer);

export default store