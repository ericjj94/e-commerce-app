import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ActionType, ProductObject } from "../state";

const initialState = {
  items: [],
};

interface InitialStateInterface {
  items: ProductObject[];
}

interface CartInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: 3.9;
    count: 120;
  };
}
export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemsToCart: (state: any, action: PayloadAction<CartInterface>) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeItemsFromCart: (state: InitialStateInterface, action: any) => {
      return {
        ...state,
        items: action.payload,
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
