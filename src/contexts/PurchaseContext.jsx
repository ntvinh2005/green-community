import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import PurchaseReducer from "../reducers/PurchaseReducer";


export function usePurchase() {
  const { user } = useAuth();

  const [PurchaseState, dispatch] = useReducer(PurchaseReducer, {
    requests: [],
  });

  useEffect(() => {
    return database.purchase
      .where("customerId", "==", user.uid)
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_REQUESTS",
          payload: { requests: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [user]);

  return PurchaseState;
}