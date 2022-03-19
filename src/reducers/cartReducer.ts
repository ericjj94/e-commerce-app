import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ProductObject, CartObject } from "../state";

const initialState = {
  items: [],
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemsToCart: (state: any, action: PayloadAction<ProductObject>) => {
      let updatedCart = [];
      const product: CartObject = state.items?.find((item: CartObject) => item.id === action.payload.id);
      if (product && Object.keys(product).length) {
        updatedCart.push({
          ...action.payload,
          quantity: product?.quantity + 1,
        });
      } else {
        updatedCart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedCart,
      };
    },
    removeItemsFromCart: (state: any, action: PayloadAction<number>) => {
      const updatedCartItems = state.items.filter((item: ProductObject) => item.id !== action.payload);
      return {
        ...state,
        items: updatedCartItems,
      };
    },
  },
});
export const { addItemsToCart, removeItemsFromCart } = cartReducer.actions;

export default cartReducer.reducer;
