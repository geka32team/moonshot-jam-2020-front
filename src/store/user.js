
let userInitialState = { name: "", login: false, hideDmg: true };
const user = function(state = userInitialState, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_LOGIN":
        return { ...state, login: action.payload };
      case "HIDE_DMG":
        return { ...state, hideDmg: action.payload };
      default:
        return state;
    }
  };

  export default user