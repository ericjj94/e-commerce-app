import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ActionType, ProductObject } from "../state";

const initialState = {
  items: [],
};

interface InitialStateInterface {
  items: ProductObject[];
}

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemsToCart: (state: any, action: PayloadAction<ProductObject>) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeItemsFromCart: (state: any, action: PayloadAction<number>) => {
      console.log("action.payload", action.payload);
      const updatedCartItems = state.items.filter((item: ProductObject) => item.id !== action.payload);
      return {
        ...state,
        items: updatedCartItems,
      };
    },
  },
});
export const { addItemsToCart, removeItemsFromCart } = cartReducer.actions;

// export const getProducts = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const result = await FetchService("/products", "GET");
//       dispatch(setProducts(result));
//     } catch (e) {
//       console.log("Error fetching products", e);
//     }
//   };
// };

export default cartReducer.reducer;
