import { createSlice, Dispatch } from "@reduxjs/toolkit";
import FetchService from "../services/FetchService";
import { ActionType } from "../state";

const initialState = {
  productsList: [],
};

export const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setProducts: (state, action: ActionType) => {
      return {
        ...state,
        productsList: action.payload,
      };
    },
  },
});
export const { setProducts } = productsReducer.actions;

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await FetchService("/products", "GET");
      dispatch(setProducts(result));
    } catch (e) {
      console.log("Error fetching products", e);
    }
  };
};

export default productsReducer.reducer;
