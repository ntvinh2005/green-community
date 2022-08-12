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
      case "UNSET_PROFILE": {
        return {
          ...state,
          profile: {
            email: "Unknown",
            uid: "Unknown"
          }
        }
      }
        default:
        return state;
    }
};

export default ProfileReducer;