import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductObject, CartObject } from "../state";

const initialState = {
  items: [],
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemsToCart: (state: any, action: PayloadAction<ProductObject>) => {
      let clonedItems = JSON.parse(JSON.stringify(state.items));
      if (!clonedItems.length) {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      } else {
        let selectedItem = clonedItems.findIndex((item: CartObject) => item.id === action.payload.id);
        let updatedItems: CartObject[] = [];
        if (selectedItem !== -1) {
          clonedItems[selectedItem] = { ...action.payload, quantity: clonedItems[selectedItem]["quantity"] + 1 };
          return {
            ...state,
            items: [...clonedItems],
          };
        } else {
          updatedItems = [...clonedItems, { ...action.payload, quantity: 1 }];
          return {
            ...state,
            items: updatedItems,
          };
        }
      }
    },
    removeItemsFromCart: (state: any, action: PayloadAction<number>) => {
      const updatedCartItems = state.items.filter((item: ProductObject) => item.id !== action.payload);
      return {
        ...state,
        items: updatedCartItems,
      };
    },
    clearCart: (state: any) => {
      return {
        ...state,
        items: [],
      };
    },
  },
});
export const { addItemsToCart, removeItemsFromCart, clearCart } = cartReducer.actions;

export default cartReducer.reducer;
