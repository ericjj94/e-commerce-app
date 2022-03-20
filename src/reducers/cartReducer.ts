import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import FetchService from "../services/FetchService";
import { ProductObject, CartObject } from "../state";

const initialState = {
  items: [],
  orderPlaced: false,
  orderDetails: {},
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
    reduceQuantityForItem: (state: any, action: PayloadAction<CartObject>) => {
      const clonedItems = JSON.parse(JSON.stringify(state.items));
      const updatedItems = clonedItems.map((item: CartObject) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    },
    clearCart: (state: any) => {
      return {
        ...state,
        items: [],
      };
    },
    setOrder: (state: any, action) => {
      return {
        ...state,
        orderPlaced: action.payload,
      };
    },
    orderDetails: (state: any, action) => {
      return {
        ...state,
        orderDetails: action.payload,
      };
    },
  },
});
export const { addItemsToCart, removeItemsFromCart, clearCart, reduceQuantityForItem, setOrder, orderDetails } =
  cartReducer.actions;

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
export default cartReducer.reducer;
