import { createSlice, Dispatch } from "@reduxjs/toolkit";
import FetchService from "../services/FetchService";

const initialState = {
  productsList: [],
};

export const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setProducts: (state, action) => {
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
      console.log("result", result);
    } catch (e) {
      console.log("Error fetching products", e);
    }
  };
};

export default productsReducer.reducer;
