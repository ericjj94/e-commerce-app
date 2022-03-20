import { Dispatch } from "@reduxjs/toolkit";
import { orderDetails, setOrder } from "../reducers/cartReducer/cartReducer";
import FetchService from "../services/FetchService";

export const placeOrder = (email: string) => {
  return async (dispatch: Dispatch, getState: Function) => {
    try {
      const payload = {
        email,
        cartItems: getState().cart.items,
      };
      const result = await FetchService(`/place_order`, "POST", payload);
      if (result?.orderId) {
        dispatch(setOrder(true));
        dispatch(orderDetails(result));
      }
    } catch (e) {
      console.log("Error searching for products", e);
    }
  };
};
