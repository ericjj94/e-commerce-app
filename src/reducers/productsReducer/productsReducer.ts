import { createSlice, Dispatch } from "@reduxjs/toolkit";
import FetchService from "../../services/FetchService";
import { ActionType } from "../../state";

const initialState = {
  productsList: [],
  productDetails: {},
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
    setProductDetails: (state, action: ActionType) => {
      return {
        ...state,
        productDetails: action.payload,
      };
    },
  },
});
export const { setProducts, setProductDetails } = productsReducer.actions;

export default productsReducer.reducer;
