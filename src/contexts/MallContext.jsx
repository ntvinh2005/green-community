import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import MallReducer from "../reducers/ShopReducer";


export function useMall() {
  const { user } = useAuth();

  const [MallState, dispatch] = useReducer(MallReducer, {
    shop_items: [],
  });

  useEffect(() => {
    return database.shop_item
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_ITEMS",
          payload: { shop_items: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [user]);

  return MallState;
}