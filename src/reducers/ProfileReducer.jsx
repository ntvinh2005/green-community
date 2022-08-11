const ProfileReducer = (state, action) => {
    const {type, payload} = action
    console.log(type, payload)
    switch (type) {
      case "SET_PROFILE": {
        return {
          ...state,
          profile: payload.profile
        };
      }
      default:
        return state;
    }
};

export default ProfileReducer;