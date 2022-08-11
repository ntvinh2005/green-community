import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import UserReducer from "../reducers/UserReducer";

const INITIAL_STATE = {
  User: null,
};

export function useProfile() {
  const { user } = useAuth();

  const [UserCredential, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    useEffect(() => {    
        if (user == null) {
            console.log(1);
            return dispatch({type: "LOGOUT"})
        } else {
            // console.log(user.uid);
            return database.profile
            .where("uid", "==", user.uid)
            .onSnapshot((snapshot) => {
                dispatch({
                    type: "LOGIN",
                    payload: { User: snapshot.docs.map(database.formatDoc) },
                });
            });
        }
    }, [user]);

  return UserCredential;
}