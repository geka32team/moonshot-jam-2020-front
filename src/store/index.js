import { createStore, combineReducers } from 'redux';

let userInitialState = { name: "", login: false };

let user = function(state = userInitialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

let Reducer = combineReducers({user})
let store = createStore(Reducer);

export default store