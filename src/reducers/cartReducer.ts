import { createSlice, Dispatch } from "@reduxjs/toolkit";
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
    addItemsToCart: (state: InitialStateInterface, action: any) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    removeItemsFromCart: (state: InitialStateInterface, action: any) => {
      //   const remainingItems = state.items.filter((item) => item.id !== action.id);
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});
export const { addItemsToCart } = cartReducer.actions;

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
