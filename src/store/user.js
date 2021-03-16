
let userInitialState = { name: "", login: false };
const user = function(state = userInitialState, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_LOGIN":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  };

  export default user