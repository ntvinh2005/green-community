import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import ShopReducer from "../reducers/ShopReducer";


export function useShop() {
  const { user } = useAuth();

  const [ShopState, dispatch] = useReducer(ShopReducer, {
    shop_items: [],
  });

  useEffect(() => {
    return database.shop_item
      .where("author", "==", user.uid)
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_ITEMS",
          payload: { shop_items: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [user]);

  return ShopState;
}