import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import ProfileReducer from "../reducers/ProfileReducer";

export function useProfile() {
  const { user } = useAuth();

  const [ProfileState, dispatch] = useReducer(ProfileReducer, {
    profile: {
      email: "Unknown",
      uid: "Unknown",
    },
  });

  useEffect(() => {
    return database.profile
      .where("uid", "==", user.uid)
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_PROFILE",
          payload: { profile: snapshot.docs.map(database.formatDoc)[0] },
        });
      });
  }, [user]);
  console.log(ProfileState);

  return ProfileState;
}
