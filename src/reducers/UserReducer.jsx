const UserReducer = (state, action) => {
    // console.log(action.payload.user);
    switch (action.type) {
      case "LOGIN": {
        return {
          ...state,
          User: action.payload.User
        };
      }
      case "LOGOUT": {
        return {
          User: null,
        };
      }
      default:
        return state;
    }
};

export default UserReducer;
  